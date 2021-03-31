# ExtensionCommonPrimitives

Plugin, which includes a set of common primitives for [PrimitiveLibraryPanel](https://github.com/ISGNeuroTeam/DTCD-PrimitiveLibraryPanel)

## Getting Started

In order to use this plugin you need to download it, build and move build folder to _plugins_ folder on DTCD server. For more information look at _Deployment_ section down below.

### Prerequisites

- [node.js](https://nodejs.org/en/) LTS version 14.x.x
- `make` utility
- [DTCD](https://github.com/ISGNeuroTeam/DTCD) application

### Building

```
make build
```

## Running the tests

```
make test
```

## Create build package

```
make pack
```

## Clear dependencies

```
make clear
```

## Deployment

Create package, then move archive to _plugins_ folder in DTCD server root folder and unarchive it with the following commands:

```
tar -zxf DTCD-ExtensionCommonPrimitives-*.tar.gz
```

## Built With

- [rollup](https://rollupjs.org/guide/en/) - Builder

## Contributing

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/ISGNeuroTeam/DTCD-LogSystem/tags).

Also you can see the [CHANGELOG](CHANGELOG.md) file.

## Authors

Roman Kuramshin (rkuramshin@isgneuro.com)

## License

This project is licensed under the OT.PLATFORM license agreement - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments
