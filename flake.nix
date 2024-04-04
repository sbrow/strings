{
  description = "Simple, functional, dependency free string manipulation in Vanilla JS";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-22.11";
    # bp.url = "github:serokell/nix-npm-buildpackage";
    bp.url = "github:sbrow/nix-npm-buildpackage";
    bp.inputs.nixpkgs.follows = "nixpkgs";
  };

  outputs = { bp, self, nixpkgs }:
    let
      pkgs = nixpkgs.legacyPackages.x86_64-linux;
    in
    {
      devShells.x86_64-linux.default = pkgs.mkShell {
        buildInputs = with pkgs; [
          nodejs
          yarn
        ];
      };

      checks.x86_64-linux.default = bp.outputs.legacyPackages.x86_64-linux.buildYarnPackage {
        src = ./.;
        yarnBuildMore = "yarn build; yarn test";
      };
    };
}
