module.exports = {
    // config for a library is scoped under "dependency" key
    dependency: {
      platforms: {
        ios: {
            "project": "iOS/RCTOrientation.xcodeproj"
        },
        android: {
            "packageInstance": "new OrientationPackage()"
        }, // projects are grouped into "platforms"
      }
    },
  };