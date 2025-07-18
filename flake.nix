{
  description = "Deno algorithms practice";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs?ref=nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }: 
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs { inherit system; };

      in {
        devShell = pkgs.mkShell {
          buildInputs = with pkgs; [
            deno
            jdk21
            nodejs
          ];
        };
      }
    );
}
