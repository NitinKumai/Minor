
{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  # List of packages to include
  buildInputs = with pkgs; [
    python3
    python3Packages.pip
    python3Packages.requests
    typst
    pandoc
    inotify-tools
    # python3Packages.os
  ];

  # Environment variables

  # Shell hook - runs when you enter the shell
  shellHook = ''
  zsh
  '';
}
