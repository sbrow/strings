{
  description = "Simple, functional, dependency free string manipulation in Vanilla JS";

  outputs = { self, nixpkgs }: 
  let
    pkgs = nixpkgs.legacyPackages.x86_64-linux;
  in {
    devShells.x86_64-linux.default = pkgs.mkShell {
      buildInputs = with pkgs; [ 
        yarn
      ];
    };

    checks.x86_64-linux.default = pkgs.stdenv.mkDerivation {
        name = "strings-check";
        src = ./.;

        nativeBuildInputs = with pkgs; [ yarn ];
        buildPhase = ''
          # this line removes a bug where value of $HOME is set to a non-writable /homeless-shelter dir
          export HOME=$(pwd)

          yarn
          yarn test
        '';
        checkPhase = ''
          yarn test
        '';
        installPhase = ''
        '';
    };
  };
}
