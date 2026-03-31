import json
import os
import subprocess
import sys


def get_latex_symbols(file_path):
    """
    Sends a 'documentSymbol' request to texlab and prints the entire response.
    """
    # Ensure the file path is absolute
    file_path = os.path.abspath(file_path)
    file_uri = f"file://{file_path}"
    
    # 1. Start the texlab server process
    server_process = subprocess.Popen(
        ['texlab'],
        stdin=subprocess.PIPE,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        text=True,
        bufsize=1  # Line buffered
    )
    
    # 2. Create the LSP request message
    request = {
        "jsonrpc": "2.0",
        "id": 1,
        "method": "textDocument/documentSymbol",
        "params": {
            "textDocument": {
                "uri": file_uri
            }
        }
    }
    
    # 3. Send the request to the server
    request_str = json.dumps(request)
    message = f"Content-Length: {len(request_str)}\r\n\r\n{request_str}"
    server_process.stdin.write(message)
    server_process.stdin.flush()
    
    # 4. Read the complete response
    response_data = ""
    content_length = None
    
    while True:
        line = server_process.stdout.readline()
        if not line:  # EOF
            break
            
        response_data += line
        
        # Parse Content-Length header
        if line.startswith('Content-Length:'):
            content_length = int(line.split(':')[1].strip())
        
        # After headers, there's an empty line, then the JSON body
        if line == '\r\n' or line == '\n':
            # Read exactly content_length bytes for the JSON body
            if content_length:
                body = server_process.stdout.read(content_length)
                response_data += body
                break
    
    # 5. Parse and print the response
    print("=== RAW RESPONSE ===")
    print(response_data)
    print("\n=== PARSED RESPONSE ===")
    
    # Extract the JSON body (it's after the headers)
    if '\r\n\r\n' in response_data:
        json_body = response_data.split('\r\n\r\n', 1)[1]
        try:
            response_json = json.loads(json_body)
            print(json.dumps(response_json, indent=2))
            
            # Pretty print the document symbols if present
            if 'result' in response_json:
                print("\n=== DOCUMENT SYMBOLS ===")
                symbols = response_json['result']
                print_symbols(symbols)
                
        except json.JSONDecodeError as e:
            print(f"Error parsing JSON: {e}")
            print(f"Raw body: {json_body}")
    
    # 6. Clean up
    server_process.terminate()
    server_process.wait(timeout=5)

def print_symbols(symbols, indent=0):
    """Recursively print document symbols"""
    if not symbols:
        return
        
    for symbol in symbols:
        # Handle both SymbolInformation and DocumentSymbol formats
        name = symbol.get('name', 'Unknown')
        kind = symbol.get('kind', 'Unknown')
        location = symbol.get('location', {})
        
        # Get line number if available
        if 'range' in symbol:
            line = symbol['range']['start']['line'] + 1
        elif 'location' in location and 'range' in location:
            line = location['range']['start']['line'] + 1
        else:
            line = '?'
            
        # Print with indentation for hierarchy
        print(f"{'  ' * indent}[Line {line}] {name} (kind: {get_symbol_kind_name(kind)})")
        
        # Handle nested symbols (for DocumentSymbol format)
        if 'children' in symbol and symbol['children']:
            print_symbols(symbol['children'], indent + 1)

def get_symbol_kind_name(kind):
    """Convert symbol kind number to readable name"""
    kinds = {
        1: 'File',
        2: 'Module',
        3: 'Namespace',
        4: 'Package',
        5: 'Class',
        6: 'Method',
        7: 'Property',
        8: 'Field',
        9: 'Constructor',
        10: 'Enum',
        11: 'Interface',
        12: 'Function',
        13: 'Variable',
        14: 'Constant',
        15: 'String',
        16: 'Number',
        17: 'Boolean',
        18: 'Array',
        19: 'Object',
        20: 'Key',
        21: 'Null',
        22: 'EnumMember',
        23: 'Struct',
        24: 'Event',
        25: 'Operator',
        26: 'TypeParameter'
    }
    return kinds.get(kind, f'Unknown({kind})')

# Alternative simpler version using a temporary file
def get_latex_symbols_simple(file_path):
    """
    Simpler approach using texlab's --log-file option to capture output
    """
    file_path = os.path.abspath(file_path)
    log_file = '/tmp/texlab_response.json'
    
    # Run texlab with logging
    cmd = f'texlab --log-file {log_file} --log-file-level info'
    # Note: This is conceptual; texlab is designed as a persistent server
    # The full client approach above is more reliable

# Example usage
if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python script.py <path_to_tex_file>")
        sys.exit(1)
    
    file_path = sys.argv[1]
    if not os.path.exists(file_path):
        print(f"Error: File '{file_path}' not found")
        sys.exit(1)
        
    get_latex_symbols(file_path)
