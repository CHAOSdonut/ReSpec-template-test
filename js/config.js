/* eslint-disable no-unused-vars */
const config = {
  useLogo: true,
  useSideBar: true,
  license: "cc0",
  specType: "def",
  specStatus: "def",
  govTextCode: "AA",

  // subtitle: "Hier komt een subtitle",
  shortName: "API-Design-Rules",

  publishDate: "2022-10-05",
  previousPublishDate: "2020-09-20",
  // Zie https://github.com/w3c/respec/wiki/previousMaturity. Dit moet een
  // A YYYY-MM-DD date. When a previousPublishDate is specified, this is typically required as well in order to generate the "Previous Version"
  previousMaturity: "DEF",
  pubDomain: "dk",
  pubSubDomain: "watisdk",
  nl_markdownTableClass: "simple",
  nl_markdownEmbedImageInFigure: true,

  editors: [
    {
      name: "Rick de Bruijn",
      mailto: "api@digikoppeling",
      company: "Logius",
      companyURL: "https://logius.nl/standaarden",
    },
  ],
  authors: [
    {
      name: "Rick de Bruijn",
      url: "https://logius.nl/standaarden",
    },
  ],
  github: "https://github.com/Logius-standaarden/API-Design-Rules",
  //   testSuiteURI: "https://github.com/Logius-standaarden/API-Design-Rules",
  highlightVars: true,
  // noHighlightCSS: true, // hidden config ?!
  nl_emailcomments: "digikoppeling@logius.nl",
  addSectionLinks: true,
  a11y: false,
  maxTocLevel: 3,
  alternateFormats: [
    {
      label: "html",
      uri: "https://publicatie.centrumvoorstandaarden.nl/api/oauth/static.html",
    },
    {
      label: "pdf",
      uri: "https://publicatie.centrumvoorstandaarden.nl/api/oauth/static.pdf",
    },
  ],

  // nl_addReleaseTagTitle: true,
  nl_markdownSplitH1sections: false,
  nl_github: {
    issueBase: "https://github.com/Geonovum/KP-APIs/issues/",
    revision: "https://github.com/Logius-standaarden/API-Design-Rules/commits/",
    pullrequests:
      "https://github.com/Logius-standaarden/API-Design-Rules/pulls/",
  },
};
/* eslint-enable no-unused-vars */
