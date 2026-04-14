{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  buildInputs = with pkgs.python3Packages; [
    django
    django-ninja  # or django-rest-framework for DRF
    psycopg2      # PostgreSQL support
    pymongo
  ];
  shellHook = ''
    if [ -f .env ]; then
      source .env
  '';
}
