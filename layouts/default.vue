<template>
  <div id="dancexpresslv">
    <div class="hamburger">
      <svg
        class="hamburger__toggle"
        @click="navToggle"
        enable-background="new 0 0 32 32"
        id="Glyph"
        version="1.1"
        viewBox="0 0 32 32"
        xml:space="preserve"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        title="Open Navigation"
        role="button"
      >
        <path
          d="M26,16c0,1.104-0.896,2-2,2H8c-1.104,0-2-0.896-2-2s0.896-2,2-2h16C25.104,14,26,14.896,26,16z"
          id="XMLID_314_"
        />
        <path
          d="M26,8c0,1.104-0.896,2-2,2H8c-1.104,0-2-0.896-2-2s0.896-2,2-2h16C25.104,6,26,6.896,26,8z"
          id="XMLID_315_"
        />
        <path
          d="M26,24c0,1.104-0.896,2-2,2H8c-1.104,0-2-0.896-2-2s0.896-2,2-2h16C25.104,22,26,22.896,26,24z"
          id="XMLID_316_"
        />
      </svg>
      <NuxtLink class="hamburger__link" to="/">
        <img
          class="hamburger__link-img"
          width="200"
          height="53"
          alt="Dance Xpress"
          src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNy4zLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAyMDUgNDQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDIwNSA0NDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4NCgkuc3Qwe2ZpbGw6IzEyMTIxMjt9DQo8L3N0eWxlPg0KPHBhdGggY2xhc3M9InN0MCIgZD0iTTEyLjIsMTNsMi43LTAuNGMwLjUsMCwwLjcsMC4xLDAuNywwLjRjMCwwLjUtMC43LDAuOS0yLjIsMS40QzEyLjEsMTQuOCwxMC45LDE1LDEwLDE1Yy0xLjUsMC0yLjctMC41LTMuNi0xLjQNCgljLTAuOS0wLjktMS40LTIuMS0xLjYtMy43YzAtMS41LDEtMi45LDMtNC40czQuNS0yLjcsNy42LTMuNnM1LjktMS40LDguNS0xLjRjMi42LDAsNC43LDAuMiw2LjQsMC43QzMyLDEuOCwzMy41LDIuNSwzNSwzLjQNCgljMS40LDAuOSwyLjYsMi4yLDMuNCwzLjljMC44LDEuNywxLjIsMy42LDEuMiw1LjhjMCwyLjctMS41LDUuNi00LjUsOC42Yy0xLjYsMS42LTMuNSwzLjEtNS44LDQuNGMtMi4yLDEuMy01LjEsMi4zLTguNSwzLjINCgljLTMuNCwwLjktNy4yLDEuMy0xMS4yLDEuM2MtMSwwLTIuNi0wLjMtNC44LTFjLTEuMS0wLjQtMi4xLTAuOS0yLjktMS42cy0xLjItMS42LTEuMi0yLjdjMC0xLjEsMC41LTIuMSwxLjYtMy4xDQoJYzEuMS0xLDIuMi0xLjUsMy4zLTEuNWMwLjIsMCwxLjEsMC4yLDIuNSwwLjdjMS41LDAuNCwzLjEsMC42LDQuOSwwLjZzNC4xLTAuNCw3LTEuM2MyLjktMC45LDUuNS0xLjksNy45LTMuMQ0KCWMyLjQtMS4yLDQuNC0yLjUsNi4xLTMuOGMxLjctMS40LDIuNS0yLjUsMi41LTMuNGMwLTEuMy0xLjktMS45LTUuNi0xLjljLTMuNywwLTcuNSwwLjUtMTEuNCwxLjRjLTMuOSwwLjktNi4zLDItNy4yLDMuMg0KCWMwLDAsMCwwLDAsMEgxMi4yeiBNMTQuMywxOC45YzQuMS01LjIsNi4zLTcuOSw2LjYtOC4yYzAuNy0wLjgsMS4yLTEuMiwxLjYtMS4yYzAuNCwwLDAuOCwwLjEsMSwwLjRjMC4yLDAuMiwwLjQsMC41LDAuNCwwLjgNCgljMCwwLjMtMC4yLDAuOC0wLjcsMS40Yy0wLjUsMC42LTEuOCwyLjEtMy45LDQuNmMtMi4xLDIuNS0zLjEsMy43LTMuMiwzLjhjMCwwLTAuMSwwLjEtMC4yLDAuMkMxNS42LDIwLjksMTUuMywyMSwxNSwyMQ0KCXMtMC41LTAuMS0wLjgtMC40Yy0wLjItMC4zLTAuMy0wLjUtMC4zLTAuOEMxNCwxOS40LDE0LjEsMTkuMSwxNC4zLDE4Ljl6IE00Ni4xLDI3LjRjMCwwLjEsMC4xLDAuMiwwLjMsMC4zYzAuMiwwLDAuOC0wLjQsMS45LTEuMQ0KCWMxLjEtMC44LDEuNy0xLjIsMS45LTEuM2MwLjItMC4xLDAuMy0wLjEsMC40LTAuMWMwLjQsMCwwLjYsMC4yLDAuNiwwLjZjMCwwLjMtMC45LDEuMS0yLjgsMi40Yy0xLjksMS4yLTMuMiwxLjgtNCwxLjgNCgljLTAuMywwLTAuNy0wLjEtMS0wLjRjLTAuMy0wLjMtMC41LTAuNi0wLjUtMC45YzAtMC40LDAuMS0wLjgsMC4zLTEuMmMwLjItMC40LDAuMy0wLjcsMC4zLTAuOGMwLTAuMiwwLTAuMi0wLjEtMC4yDQoJYy0wLjEsMC0wLjIsMC0wLjIsMC4xYy0yLjYsMS45LTQuNSwyLjktNS43LDIuOWMtMC43LDAtMS4yLTAuMy0xLjYtMC44Yy0wLjQtMC41LTAuNi0xLTAuNy0xLjVsLTAuMS0wLjhjMC0wLjksMC4zLTEuOSwxLTMNCgljMC43LTEuMiwxLjYtMi4zLDIuNy0zLjNjMS4xLTEuMSwyLjUtMiw0LjEtMi43YzEuNi0wLjcsMy4zLTEuMSw1LTEuMWMwLjksMCwxLjcsMC4yLDIuNSwwLjdjMC44LDAuNSwxLjIsMSwxLjIsMS43DQoJYzAsMC42LTAuNiwxLTEuOSwxLjJjLTAuOSwwLjItMi41LDEtNC42LDIuM2MtMi4xLDEuMy0zLjIsMi4zLTMuMiwzYzAsMC4zLDAuMSwwLjQsMC40LDAuNGMwLjUsMCwxLjgtMC44LDMuOC0yLjMNCgljMi0xLjUsMy4yLTIuMywzLjYtMi4zYzAuNCwwLDAuNiwwLjIsMC42LDAuN2MwLDAuMy0wLjEsMC43LTAuNCwxYy0wLjIsMC4zLTAuNCwwLjUtMC41LDAuNmMtMC4yLDAuMy0wLjgsMC45LTEuNiwxLjgNCglDNDYuNiwyNiw0Ni4xLDI2LjgsNDYuMSwyNy40eiBNNjUuOCwyNy4ybDEuMi0wLjVjMC40LDAsMC42LDAuMSwwLjYsMC40YzAsMC43LTAuNiwxLjMtMS43LDJjLTEuMSwwLjYtMi4yLDEtMy4yLDENCgljLTEsMC0xLjgtMC4yLTIuNC0wLjdjLTAuNi0wLjQtMC44LTEuMS0wLjgtMnMwLjUtMiwxLjYtMy40YzAuMS0wLjEsMC4yLTAuMiwwLjItMC4zYzAtMC4xLTAuMS0wLjItMC4yLTAuMmMtMC4xLDAtMC4yLDAtMC4zLDAuMQ0KCWMtMC4xLDAuMS0wLjcsMC40LTEuNywxLjFjLTIuNiwxLjYtNC40LDIuOC01LjUsMy40Yy0wLjUsMC4yLTAuOSwwLjQtMS4zLDAuNGMtMC40LDAtMC44LTAuMy0xLjMtMC44Yy0wLjUtMC41LTAuNy0xLTAuNy0xLjUNCgljMC0xLjEsMS41LTMsNC41LTUuOGMzLTIuOSw1LjEtNC4zLDYuMS00LjNjMC40LDAuMSwwLjcsMC4zLDEsMC43YzAuMywwLjQsMC40LDAuOSwwLjQsMS40YzAsMC41LTAuMiwxLjEtMC42LDEuOA0KCWMtMC42LDAuOS0xLjEsMS42LTEuNCwyYy0wLjMsMC4zLTAuNSwwLjYtMC41LDAuN2MwLDAuMSwwLDAuMSwwLjEsMC4xYzAuMSwwLDAuMiwwLDAuMy0wLjFjMC4yLTAuMSwxLjQtMC45LDMuOC0yLjUNCgljMi40LTEuNiwzLjctMi40LDQtMi42YzAuMy0wLjIsMC42LTAuMywxLTAuM2MwLjMsMCwwLjgsMC4yLDEuNCwwLjVjMC42LDAuMywwLjgsMC44LDAuOCwxLjNzLTAuNSwxLjQtMS41LDIuNQ0KCWMtMSwxLjEtMS45LDIuMS0yLjksMy4yYy0xLDEtMS41LDEuNy0xLjUsMi4yQzY1LjQsMjcuMSw2NS41LDI3LjIsNjUuOCwyNy4yeiBNODYuMiwyMi43YzAsMC4zLTAuOSwxLTIuNiwyLjENCgljLTEuNywxLjEtMy43LDIuMi01LjksMy4zYy0yLjIsMS4xLTMuOSwxLjYtNC44LDEuNmMtMSwwLTEuOC0wLjMtMi41LTAuOWMtMC43LTAuNi0xLTEuMy0xLTIuMWMwLTEuNiwwLjctMy4yLDIuMS00LjkNCgljMS40LTEuNywzLjEtMy4xLDUtNC4xYzEuOS0xLjEsMy41LTEuNiw0LjgtMS42YzEuMywwLDIuMywwLjIsMywwLjVjMC43LDAuMywxLDAuOSwxLDEuOHMtMC42LDItMS44LDMuMmMtMS4xLDEuMi0yLjEsMS44LTMsMS44DQoJYy0wLjUsMC0wLjgtMC4yLTAuOC0wLjVjMC0wLjIsMC4xLTAuNCwwLjQtMC42YzAuMy0wLjIsMC44LTAuNSwxLjQtMS4xYzAuNi0wLjYsMS0xLDEtMS4yYzAtMC4xLTAuMS0wLjEtMC4yLTAuMQ0KCWMtMC45LDAtMi4zLDAuOS00LDIuNmMtMS43LDEuNy0yLjYsMy0yLjYsMy44YzAsMC40LDAuMiwwLjYsMC43LDAuNmMwLjUsMCwxLjItMC4zLDIuMy0wLjhjMS0wLjYsMi4zLTEuMywzLjgtMi4yczIuNC0xLjUsMi42LTEuNg0KCWMwLjItMC4xLDAuNC0wLjIsMC42LTAuMkM4NiwyMi4xLDg2LjIsMjIuMyw4Ni4yLDIyLjd6IE05MS40LDIxLjJsMi0wLjJjMC45LDAsMS40LDAuNSwxLjQsMS40YzAsMC41LTAuNCwxLTEuMywxLjYNCgljLTAuOSwwLjYtMS44LDEuMS0yLjcsMS42Yy0wLjksMC41LTEuMywwLjktMS4zLDEuMWMwLDAuMiwwLjIsMC4zLDAuNiwwLjRjMC45LDAsMi43LTAuNyw1LjMtMi4yYzIuNi0xLjUsNC0yLjIsNC4yLTIuMg0KCWMwLjQsMCwwLjYsMC4yLDAuNiwwLjZjMCwwLjMtMC45LDAuOS0yLjYsMmMtMS43LDEtMy42LDIuMS01LjgsM2MtMi4yLDEtMy45LDEuNC01LjEsMS40Yy0xLjgsMC0yLjgtMS0yLjgtMi45DQoJYzAtMC42LDAuNC0xLjIsMS4xLTEuOGMwLjgtMC43LDEuNS0xLjIsMi4zLTEuN2MwLjgtMC41LDEuMi0wLjgsMS4yLTAuOWMwLTAuMS0wLjItMC4zLTAuNi0wLjRjLTEuMS0wLjUtMS43LTEuMS0xLjctMS45DQoJYzAtMS41LDEuMi0yLjksMy43LTQuMmMyLjUtMS40LDQuOC0yLDctMmMxLjIsMCwyLjEsMC4yLDIuOSwwLjdjMC44LDAuNCwxLjIsMS4xLDEuMiwyYzAsMC45LTAuNiwxLjctMS45LDIuNQ0KCUM5Ny45LDE5LjYsOTcsMjAsOTYuNCwyMGMtMC4yLDAtMC40LTAuMS0wLjYtMC4yYy0wLjItMC4xLTAuMi0wLjItMC4yLTAuNGMwLTAuMSwwLjQtMC4zLDEuMS0wLjZjMC43LTAuMywxLjEtMC42LDEuMS0wLjkNCgljMC0wLjEtMC4yLTAuMi0wLjYtMC4yYy0wLjQsMC0xLjYsMC40LTMuOCwxLjNjLTIuMSwwLjgtMy4yLDEuNC0zLjIsMS44QzkwLjIsMjEuMSw5MC42LDIxLjIsOTEuNCwyMS4yeiBNMTMwLjEsMjguOQ0KCWMtMS4xLDAtMi42LTEuOC00LjQtNS40Yy0wLjUtMC45LTEuMy0yLjMtMi40LTQuMmMtMSwwLjgtMi4yLDEuOS0zLjcsMy40Yy0xLjUsMS40LTIuNywyLjUtMy42LDMuM2MtMC45LDAuOC0xLjksMS42LTMsMi41DQoJYy0yLjEsMS43LTMuOSwyLjUtNS4zLDIuNWMtMC45LDAtMS44LTAuNS0yLjctMS42Yy0wLjktMS0xLjMtMS45LTEuMy0yLjhjMC0yLjQsMS40LTUsNC4xLTcuOGMyLjctMi45LDYuMi01LjcsMTAuNC04LjRsLTQuNS03LjcNCgljLTAuMS0wLjQtMC4yLTAuNy0wLjItMWMwLTAuMywwLjEtMC42LDAuNC0xYzAuMy0wLjMsMC42LTAuNSwxLjEtMC41YzAuNywwLDEuMywwLjYsMS44LDEuOGMwLjEsMC4yLDEuNCwyLjUsMy45LDYuOQ0KCWMzLTEuOCw1LjgtMy40LDguNC00LjdjMi43LTEuMyw0LjMtMiw0LjktMmMwLjMsMCwwLjcsMC4xLDEuMywwLjJjMC42LDAuMSwxLjEsMC4zLDEuNSwwLjVjMC40LDAuMiwwLjcsMC41LDEsMC45DQoJYzAuMywwLjQsMC41LDAuOSwwLjUsMS40YzAsMC41LTAuMiwxLjEtMC42LDEuN2MtMC40LDAuNi0xLjEsMS4zLTIsMi4yYy0wLjksMC44LTEuOCwxLjYtMi43LDIuM2MtMC45LDAuNy0yLjEsMS43LTMuNiwyLjkNCgljLTEuNSwxLjItMi44LDIuMi0zLjgsMy4xYzIuMSwzLjcsMy4zLDUuOCwzLjcsNi4zYzAuNCwwLjUsMC43LDEsMC45LDEuNGMwLjcsMS4xLDEsMS45LDEsMi40YzAsMC41LTAuMSwwLjktMC4zLDENCglDMTMwLjcsMjguNywxMzAuNCwyOC45LDEzMC4xLDI4Ljl6IE0xMjMuNSw0MC44YzAtMS4zLDAuNi0zLjEsMS45LTUuNWMxLjMtMi40LDIuOC00LjgsNC42LTcuM2MzLjgtNS4zLDcuMi05LjYsMTAtMTIuOWwxLjktMi4yDQoJYzAuNC0wLjQsMC44LTAuNiwxLjItMC42YzAuNCwwLDAuNywwLjEsMC45LDAuNGMwLjIsMC4zLDAuMywwLjYsMC4zLDAuOGMwLDAuMi0wLjIsMC43LTAuNSwxLjVjLTAuMywwLjgtMC43LDEuNy0xLjEsMi43DQoJYy0wLjQsMS0wLjcsMS41LTAuNywxLjZjMCwwLjEsMCwwLjIsMCwwLjNjMCwwLjEsMC4xLDAuMiwwLjIsMC4yYzAuMiwwLDAuNi0wLjMsMS4zLTAuOWMyLjEtMS44LDMuNi0yLjYsNC42LTIuNg0KCWMxLjksMCwyLjgsMSwyLjgsMi45Yy0wLjEsMS0wLjcsMi4zLTEuOCwzLjhjLTEuMSwxLjYtMi40LDMtNCw0LjNjLTEuNiwxLjMtMy4xLDEuOS00LjQsMS45Yy0wLjYsMC0xLjEtMC4xLTEuNS0wLjQNCgljLTAuNC0wLjMtMC43LTAuNi0xLTAuOWMtMC4yLTAuMy0wLjQtMC40LTAuNC0wLjRjLTAuMSwwLTAuMSwwLjEtMC4yLDAuMmMtMC4xLDAuMS0yLjcsNC40LTcuOCwxMi44Yy0xLjMsMi4xLTIuNiwzLjItMy45LDMuMg0KCWMtMC43LDAtMS4yLTAuMy0xLjYtMC45QzEyMy43LDQyLjEsMTIzLjUsNDEuNSwxMjMuNSw0MC44eiBNMTQ2LjIsMTljLTAuNywwLTIuMSwxLTQuMiwzLjFjLTIuMSwyLjEtMy4yLDMuNC0zLjIsMy45DQoJYzAsMC4xLDAuMSwwLjEsMC4yLDAuMWMxLDAsMi41LTAuOSw0LjYtMi44YzItMS45LDMtMy4zLDMtNEMxNDYuNSwxOS4xLDE0Ni40LDE5LDE0Ni4yLDE5eiBNMTU4LjIsMTQuMWMwLjIsMCwwLjQsMC4xLDAuNSwwLjMNCgljMC4yLDAuMiwwLjIsMC40LDAuMiwwLjZjMCwwLjItMC4xLDAuNS0wLjQsMC44Yy0xLDEuMy0xLjcsMi4xLTIuMSwyLjRjLTAuMywwLjMtMC41LDAuNS0wLjUsMC42YzAsMC4xLDAuMSwwLjIsMC4yLDAuMg0KCWMwLjIsMCwwLjktMC4yLDIuMi0wLjdjMS4zLTAuNSwyLjEtMC43LDIuNS0wLjdjMC40LDAsMC44LDAuMiwxLjIsMC41YzAuNCwwLjMsMC42LDAuNywwLjYsMS4zYzAsMC41LTAuOCwxLjctMi40LDMuNg0KCWMtMS42LDEuOC0yLjQsMy0yLjQsMy42YzAsMC4xLDAsMC4yLDAuMSwwLjJjMC4xLDAsMC40LTAuMSwwLjctMC4yYzAuMy0wLjIsMC42LTAuMywwLjYtMC4zYzAuMywwLDAuNCwwLjEsMC40LDAuMw0KCWMwLDAuOC0wLjcsMS43LTIsMi41Yy0xLjMsMC44LTIuNCwxLjItMy4zLDEuMmMtMC45LDAtMS42LTAuMy0yLjItMC44Yy0wLjYtMC41LTAuOC0xLjEtMC44LTJzMC40LTEuNywxLjItMi44DQoJYzAuOC0xLDEuNy0xLjgsMi41LTIuMmMwLjktMC40LDEuMy0wLjgsMS4zLTFjMC0wLjEsMC0wLjEsMC0wLjJjLTEuMiwwLjUtMi4xLDAuNy0yLjksMC43Yy0xLjUsMC0yLjItMC40LTIuMi0xLjMNCgljMC0xLDAuOS0yLjMsMi42LTMuOVMxNTcuMSwxNC40LDE1OC4yLDE0LjF6IE0xNjkuNSwyMS4ybDItMC4yYzAuOSwwLDEuNCwwLjUsMS40LDEuNGMwLDAuNS0wLjQsMS0xLjMsMS42cy0xLjgsMS4xLTIuNywxLjYNCgljLTAuOSwwLjUtMS4zLDAuOS0xLjMsMS4xYzAsMC4yLDAuMiwwLjMsMC42LDAuNGMwLjksMCwyLjctMC43LDUuMy0yLjJjMi42LTEuNSw0LTIuMiw0LjItMi4yYzAuNCwwLDAuNiwwLjIsMC42LDAuNg0KCWMwLDAuMy0wLjksMC45LTIuNiwyYy0xLjcsMS0zLjYsMi4xLTUuOCwzYy0yLjIsMS0zLjksMS40LTUuMSwxLjRjLTEuOCwwLTIuOC0xLTIuOC0yLjljMC0wLjYsMC40LTEuMiwxLjEtMS44DQoJYzAuOC0wLjcsMS41LTEuMiwyLjMtMS43YzAuOC0wLjUsMS4yLTAuOCwxLjItMC45YzAtMC4xLTAuMi0wLjMtMC42LTAuNGMtMS4xLTAuNS0xLjctMS4xLTEuNy0xLjljMC0xLjUsMS4yLTIuOSwzLjctNC4yDQoJYzIuNS0xLjQsNC44LTIsNy0yYzEuMiwwLDIuMSwwLjIsMi45LDAuN2MwLjgsMC40LDEuMiwxLjEsMS4yLDJjMCwwLjktMC42LDEuNy0xLjksMi41Yy0xLjIsMC44LTIuMSwxLjItMi42LDEuMg0KCWMtMC4yLDAtMC40LTAuMS0wLjYtMC4yYy0wLjItMC4xLTAuMi0wLjItMC4yLTAuNGMwLTAuMSwwLjQtMC4zLDEuMS0wLjZjMC43LTAuMywxLjEtMC42LDEuMS0wLjljMC0wLjEtMC4yLTAuMi0wLjYtMC4yDQoJYy0wLjQsMC0xLjYsMC40LTMuOCwxLjNjLTIuMSwwLjgtMy4yLDEuNC0zLjIsMS44QzE2OC4zLDIxLjEsMTY4LjcsMjEuMiwxNjkuNSwyMS4yeiBNMTgyLjksMjMuMWMtMS4xLDAtMi4xLTAuMy0zLjEtMC44DQoJYy0wLjktMC41LTEuNC0xLjMtMS40LTIuM2MwLTEuNCwxLTIuNSwyLjktMy41czMuOS0xLjUsNi0xLjVjMS4zLDAsMi4zLDAuMiwzLjEsMC43YzAuOCwwLjUsMS4yLDEuMSwxLjIsMi4xYzAsMC45LTAuNywxLjctMi4xLDIuNQ0KCWMtMS40LDAuNy0yLjMsMS4xLTIuNywxLjFjLTAuNSwwLTAuNy0wLjEtMC43LTAuM2MwLTAuMiwwLjEtMC4zLDAuMi0wLjRjMC4yLTAuMSwwLjYtMC4zLDEuMi0wLjZjMC42LTAuMywxLTAuNSwxLjMtMC42DQoJYzAuMy0wLjIsMC40LTAuMywwLjQtMC40YzAtMC4xLTAuMS0wLjItMC40LTAuMmMtMC45LDAtMi4zLDAuMy00LjIsMWMtMS45LDAuNi0yLjgsMS4xLTIuOCwxLjVjMCwwLjIsMC41LDAuNCwxLjYsMC40DQoJYzIuNiwwLDQsMS4xLDQsMy4yYzAsMC45LTAuNiwxLjgtMS43LDIuNmMtMS4xLDAuNy0yLjMsMS4zLTMuNCwxLjZjLTEuMiwwLjMtMi4xLDAuNS0yLjgsMC41Yy0wLjcsMC0xLjUtMC4zLTIuMy0xDQoJYy0wLjktMC42LTEuMy0xLjMtMS4zLTEuOXMwLjgtMS4xLDIuNS0xLjRjMC43LTAuMSwxLjctMC4zLDMtMC43YzEuMi0wLjQsMS44LTAuOCwxLjgtMS4xQzE4My4yLDIzLjIsMTgzLjEsMjMuMSwxODIuOSwyMy4xeg0KCSBNMTk1LjgsMjMuMWMtMS4xLDAtMi4xLTAuMy0zLjEtMC44Yy0wLjktMC41LTEuNC0xLjMtMS40LTIuM2MwLTEuNCwxLTIuNSwyLjktMy41czMuOS0xLjUsNi0xLjVjMS4zLDAsMi4zLDAuMiwzLjEsMC43DQoJYzAuOCwwLjUsMS4yLDEuMSwxLjIsMi4xYzAsMC45LTAuNywxLjctMi4xLDIuNWMtMS40LDAuNy0yLjMsMS4xLTIuNywxLjFjLTAuNSwwLTAuNy0wLjEtMC43LTAuM2MwLTAuMiwwLjEtMC4zLDAuMi0wLjQNCgljMC4yLTAuMSwwLjYtMC4zLDEuMi0wLjZjMC42LTAuMywxLTAuNSwxLjMtMC42YzAuMy0wLjIsMC40LTAuMywwLjQtMC40YzAtMC4xLTAuMS0wLjItMC40LTAuMmMtMC45LDAtMi4zLDAuMy00LjIsMQ0KCWMtMS45LDAuNi0yLjgsMS4xLTIuOCwxLjVjMCwwLjIsMC41LDAuNCwxLjYsMC40YzIuNiwwLDQsMS4xLDQsMy4yYzAsMC45LTAuNiwxLjgtMS43LDIuNmMtMS4xLDAuNy0yLjMsMS4zLTMuNCwxLjYNCgljLTEuMiwwLjMtMi4xLDAuNS0yLjgsMC41Yy0wLjcsMC0xLjUtMC4zLTIuMy0xYy0wLjktMC42LTEuMy0xLjMtMS4zLTEuOXMwLjgtMS4xLDIuNS0xLjRjMC43LTAuMSwxLjctMC4zLDMtMC43DQoJYzEuMi0wLjQsMS44LTAuOCwxLjgtMS4xQzE5NiwyMy4yLDE5NS45LDIzLjEsMTk1LjgsMjMuMXoiLz4NCjwvc3ZnPg0K"
        />
      </NuxtLink>
    </div>
    <nav :class="navFlag">
      <div class="nav__links">
        <NuxtLink class="nav__links-item" to="/about"
          ><span class="nav__links-item-text">About</span></NuxtLink
        >
        <NuxtLink class="nav__links-item" to="/registration"
          ><span class="nav__links-item-text">Registration</span></NuxtLink
        >
        <NuxtLink class="nav__links-item" to="/contact"
          ><span class="nav__links-item-text">Contact</span></NuxtLink
        >
      </div>
      <NuxtLink class="nav__logo" to="/">
        <img
          class="nav__logo-img"
          width="200"
          height="53"
          alt="Dance Xpress"
          src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNy4zLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAyMDUgNDQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDIwNSA0NDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4NCgkuc3Qwe2ZpbGw6IzEyMTIxMjt9DQo8L3N0eWxlPg0KPHBhdGggY2xhc3M9InN0MCIgZD0iTTEyLjIsMTNsMi43LTAuNGMwLjUsMCwwLjcsMC4xLDAuNywwLjRjMCwwLjUtMC43LDAuOS0yLjIsMS40QzEyLjEsMTQuOCwxMC45LDE1LDEwLDE1Yy0xLjUsMC0yLjctMC41LTMuNi0xLjQNCgljLTAuOS0wLjktMS40LTIuMS0xLjYtMy43YzAtMS41LDEtMi45LDMtNC40czQuNS0yLjcsNy42LTMuNnM1LjktMS40LDguNS0xLjRjMi42LDAsNC43LDAuMiw2LjQsMC43QzMyLDEuOCwzMy41LDIuNSwzNSwzLjQNCgljMS40LDAuOSwyLjYsMi4yLDMuNCwzLjljMC44LDEuNywxLjIsMy42LDEuMiw1LjhjMCwyLjctMS41LDUuNi00LjUsOC42Yy0xLjYsMS42LTMuNSwzLjEtNS44LDQuNGMtMi4yLDEuMy01LjEsMi4zLTguNSwzLjINCgljLTMuNCwwLjktNy4yLDEuMy0xMS4yLDEuM2MtMSwwLTIuNi0wLjMtNC44LTFjLTEuMS0wLjQtMi4xLTAuOS0yLjktMS42cy0xLjItMS42LTEuMi0yLjdjMC0xLjEsMC41LTIuMSwxLjYtMy4xDQoJYzEuMS0xLDIuMi0xLjUsMy4zLTEuNWMwLjIsMCwxLjEsMC4yLDIuNSwwLjdjMS41LDAuNCwzLjEsMC42LDQuOSwwLjZzNC4xLTAuNCw3LTEuM2MyLjktMC45LDUuNS0xLjksNy45LTMuMQ0KCWMyLjQtMS4yLDQuNC0yLjUsNi4xLTMuOGMxLjctMS40LDIuNS0yLjUsMi41LTMuNGMwLTEuMy0xLjktMS45LTUuNi0xLjljLTMuNywwLTcuNSwwLjUtMTEuNCwxLjRjLTMuOSwwLjktNi4zLDItNy4yLDMuMg0KCWMwLDAsMCwwLDAsMEgxMi4yeiBNMTQuMywxOC45YzQuMS01LjIsNi4zLTcuOSw2LjYtOC4yYzAuNy0wLjgsMS4yLTEuMiwxLjYtMS4yYzAuNCwwLDAuOCwwLjEsMSwwLjRjMC4yLDAuMiwwLjQsMC41LDAuNCwwLjgNCgljMCwwLjMtMC4yLDAuOC0wLjcsMS40Yy0wLjUsMC42LTEuOCwyLjEtMy45LDQuNmMtMi4xLDIuNS0zLjEsMy43LTMuMiwzLjhjMCwwLTAuMSwwLjEtMC4yLDAuMkMxNS42LDIwLjksMTUuMywyMSwxNSwyMQ0KCXMtMC41LTAuMS0wLjgtMC40Yy0wLjItMC4zLTAuMy0wLjUtMC4zLTAuOEMxNCwxOS40LDE0LjEsMTkuMSwxNC4zLDE4Ljl6IE00Ni4xLDI3LjRjMCwwLjEsMC4xLDAuMiwwLjMsMC4zYzAuMiwwLDAuOC0wLjQsMS45LTEuMQ0KCWMxLjEtMC44LDEuNy0xLjIsMS45LTEuM2MwLjItMC4xLDAuMy0wLjEsMC40LTAuMWMwLjQsMCwwLjYsMC4yLDAuNiwwLjZjMCwwLjMtMC45LDEuMS0yLjgsMi40Yy0xLjksMS4yLTMuMiwxLjgtNCwxLjgNCgljLTAuMywwLTAuNy0wLjEtMS0wLjRjLTAuMy0wLjMtMC41LTAuNi0wLjUtMC45YzAtMC40LDAuMS0wLjgsMC4zLTEuMmMwLjItMC40LDAuMy0wLjcsMC4zLTAuOGMwLTAuMiwwLTAuMi0wLjEtMC4yDQoJYy0wLjEsMC0wLjIsMC0wLjIsMC4xYy0yLjYsMS45LTQuNSwyLjktNS43LDIuOWMtMC43LDAtMS4yLTAuMy0xLjYtMC44Yy0wLjQtMC41LTAuNi0xLTAuNy0xLjVsLTAuMS0wLjhjMC0wLjksMC4zLTEuOSwxLTMNCgljMC43LTEuMiwxLjYtMi4zLDIuNy0zLjNjMS4xLTEuMSwyLjUtMiw0LjEtMi43YzEuNi0wLjcsMy4zLTEuMSw1LTEuMWMwLjksMCwxLjcsMC4yLDIuNSwwLjdjMC44LDAuNSwxLjIsMSwxLjIsMS43DQoJYzAsMC42LTAuNiwxLTEuOSwxLjJjLTAuOSwwLjItMi41LDEtNC42LDIuM2MtMi4xLDEuMy0zLjIsMi4zLTMuMiwzYzAsMC4zLDAuMSwwLjQsMC40LDAuNGMwLjUsMCwxLjgtMC44LDMuOC0yLjMNCgljMi0xLjUsMy4yLTIuMywzLjYtMi4zYzAuNCwwLDAuNiwwLjIsMC42LDAuN2MwLDAuMy0wLjEsMC43LTAuNCwxYy0wLjIsMC4zLTAuNCwwLjUtMC41LDAuNmMtMC4yLDAuMy0wLjgsMC45LTEuNiwxLjgNCglDNDYuNiwyNiw0Ni4xLDI2LjgsNDYuMSwyNy40eiBNNjUuOCwyNy4ybDEuMi0wLjVjMC40LDAsMC42LDAuMSwwLjYsMC40YzAsMC43LTAuNiwxLjMtMS43LDJjLTEuMSwwLjYtMi4yLDEtMy4yLDENCgljLTEsMC0xLjgtMC4yLTIuNC0wLjdjLTAuNi0wLjQtMC44LTEuMS0wLjgtMnMwLjUtMiwxLjYtMy40YzAuMS0wLjEsMC4yLTAuMiwwLjItMC4zYzAtMC4xLTAuMS0wLjItMC4yLTAuMmMtMC4xLDAtMC4yLDAtMC4zLDAuMQ0KCWMtMC4xLDAuMS0wLjcsMC40LTEuNywxLjFjLTIuNiwxLjYtNC40LDIuOC01LjUsMy40Yy0wLjUsMC4yLTAuOSwwLjQtMS4zLDAuNGMtMC40LDAtMC44LTAuMy0xLjMtMC44Yy0wLjUtMC41LTAuNy0xLTAuNy0xLjUNCgljMC0xLjEsMS41LTMsNC41LTUuOGMzLTIuOSw1LjEtNC4zLDYuMS00LjNjMC40LDAuMSwwLjcsMC4zLDEsMC43YzAuMywwLjQsMC40LDAuOSwwLjQsMS40YzAsMC41LTAuMiwxLjEtMC42LDEuOA0KCWMtMC42LDAuOS0xLjEsMS42LTEuNCwyYy0wLjMsMC4zLTAuNSwwLjYtMC41LDAuN2MwLDAuMSwwLDAuMSwwLjEsMC4xYzAuMSwwLDAuMiwwLDAuMy0wLjFjMC4yLTAuMSwxLjQtMC45LDMuOC0yLjUNCgljMi40LTEuNiwzLjctMi40LDQtMi42YzAuMy0wLjIsMC42LTAuMywxLTAuM2MwLjMsMCwwLjgsMC4yLDEuNCwwLjVjMC42LDAuMywwLjgsMC44LDAuOCwxLjNzLTAuNSwxLjQtMS41LDIuNQ0KCWMtMSwxLjEtMS45LDIuMS0yLjksMy4yYy0xLDEtMS41LDEuNy0xLjUsMi4yQzY1LjQsMjcuMSw2NS41LDI3LjIsNjUuOCwyNy4yeiBNODYuMiwyMi43YzAsMC4zLTAuOSwxLTIuNiwyLjENCgljLTEuNywxLjEtMy43LDIuMi01LjksMy4zYy0yLjIsMS4xLTMuOSwxLjYtNC44LDEuNmMtMSwwLTEuOC0wLjMtMi41LTAuOWMtMC43LTAuNi0xLTEuMy0xLTIuMWMwLTEuNiwwLjctMy4yLDIuMS00LjkNCgljMS40LTEuNywzLjEtMy4xLDUtNC4xYzEuOS0xLjEsMy41LTEuNiw0LjgtMS42YzEuMywwLDIuMywwLjIsMywwLjVjMC43LDAuMywxLDAuOSwxLDEuOHMtMC42LDItMS44LDMuMmMtMS4xLDEuMi0yLjEsMS44LTMsMS44DQoJYy0wLjUsMC0wLjgtMC4yLTAuOC0wLjVjMC0wLjIsMC4xLTAuNCwwLjQtMC42YzAuMy0wLjIsMC44LTAuNSwxLjQtMS4xYzAuNi0wLjYsMS0xLDEtMS4yYzAtMC4xLTAuMS0wLjEtMC4yLTAuMQ0KCWMtMC45LDAtMi4zLDAuOS00LDIuNmMtMS43LDEuNy0yLjYsMy0yLjYsMy44YzAsMC40LDAuMiwwLjYsMC43LDAuNmMwLjUsMCwxLjItMC4zLDIuMy0wLjhjMS0wLjYsMi4zLTEuMywzLjgtMi4yczIuNC0xLjUsMi42LTEuNg0KCWMwLjItMC4xLDAuNC0wLjIsMC42LTAuMkM4NiwyMi4xLDg2LjIsMjIuMyw4Ni4yLDIyLjd6IE05MS40LDIxLjJsMi0wLjJjMC45LDAsMS40LDAuNSwxLjQsMS40YzAsMC41LTAuNCwxLTEuMywxLjYNCgljLTAuOSwwLjYtMS44LDEuMS0yLjcsMS42Yy0wLjksMC41LTEuMywwLjktMS4zLDEuMWMwLDAuMiwwLjIsMC4zLDAuNiwwLjRjMC45LDAsMi43LTAuNyw1LjMtMi4yYzIuNi0xLjUsNC0yLjIsNC4yLTIuMg0KCWMwLjQsMCwwLjYsMC4yLDAuNiwwLjZjMCwwLjMtMC45LDAuOS0yLjYsMmMtMS43LDEtMy42LDIuMS01LjgsM2MtMi4yLDEtMy45LDEuNC01LjEsMS40Yy0xLjgsMC0yLjgtMS0yLjgtMi45DQoJYzAtMC42LDAuNC0xLjIsMS4xLTEuOGMwLjgtMC43LDEuNS0xLjIsMi4zLTEuN2MwLjgtMC41LDEuMi0wLjgsMS4yLTAuOWMwLTAuMS0wLjItMC4zLTAuNi0wLjRjLTEuMS0wLjUtMS43LTEuMS0xLjctMS45DQoJYzAtMS41LDEuMi0yLjksMy43LTQuMmMyLjUtMS40LDQuOC0yLDctMmMxLjIsMCwyLjEsMC4yLDIuOSwwLjdjMC44LDAuNCwxLjIsMS4xLDEuMiwyYzAsMC45LTAuNiwxLjctMS45LDIuNQ0KCUM5Ny45LDE5LjYsOTcsMjAsOTYuNCwyMGMtMC4yLDAtMC40LTAuMS0wLjYtMC4yYy0wLjItMC4xLTAuMi0wLjItMC4yLTAuNGMwLTAuMSwwLjQtMC4zLDEuMS0wLjZjMC43LTAuMywxLjEtMC42LDEuMS0wLjkNCgljMC0wLjEtMC4yLTAuMi0wLjYtMC4yYy0wLjQsMC0xLjYsMC40LTMuOCwxLjNjLTIuMSwwLjgtMy4yLDEuNC0zLjIsMS44QzkwLjIsMjEuMSw5MC42LDIxLjIsOTEuNCwyMS4yeiBNMTMwLjEsMjguOQ0KCWMtMS4xLDAtMi42LTEuOC00LjQtNS40Yy0wLjUtMC45LTEuMy0yLjMtMi40LTQuMmMtMSwwLjgtMi4yLDEuOS0zLjcsMy40Yy0xLjUsMS40LTIuNywyLjUtMy42LDMuM2MtMC45LDAuOC0xLjksMS42LTMsMi41DQoJYy0yLjEsMS43LTMuOSwyLjUtNS4zLDIuNWMtMC45LDAtMS44LTAuNS0yLjctMS42Yy0wLjktMS0xLjMtMS45LTEuMy0yLjhjMC0yLjQsMS40LTUsNC4xLTcuOGMyLjctMi45LDYuMi01LjcsMTAuNC04LjRsLTQuNS03LjcNCgljLTAuMS0wLjQtMC4yLTAuNy0wLjItMWMwLTAuMywwLjEtMC42LDAuNC0xYzAuMy0wLjMsMC42LTAuNSwxLjEtMC41YzAuNywwLDEuMywwLjYsMS44LDEuOGMwLjEsMC4yLDEuNCwyLjUsMy45LDYuOQ0KCWMzLTEuOCw1LjgtMy40LDguNC00LjdjMi43LTEuMyw0LjMtMiw0LjktMmMwLjMsMCwwLjcsMC4xLDEuMywwLjJjMC42LDAuMSwxLjEsMC4zLDEuNSwwLjVjMC40LDAuMiwwLjcsMC41LDEsMC45DQoJYzAuMywwLjQsMC41LDAuOSwwLjUsMS40YzAsMC41LTAuMiwxLjEtMC42LDEuN2MtMC40LDAuNi0xLjEsMS4zLTIsMi4yYy0wLjksMC44LTEuOCwxLjYtMi43LDIuM2MtMC45LDAuNy0yLjEsMS43LTMuNiwyLjkNCgljLTEuNSwxLjItMi44LDIuMi0zLjgsMy4xYzIuMSwzLjcsMy4zLDUuOCwzLjcsNi4zYzAuNCwwLjUsMC43LDEsMC45LDEuNGMwLjcsMS4xLDEsMS45LDEsMi40YzAsMC41LTAuMSwwLjktMC4zLDENCglDMTMwLjcsMjguNywxMzAuNCwyOC45LDEzMC4xLDI4Ljl6IE0xMjMuNSw0MC44YzAtMS4zLDAuNi0zLjEsMS45LTUuNWMxLjMtMi40LDIuOC00LjgsNC42LTcuM2MzLjgtNS4zLDcuMi05LjYsMTAtMTIuOWwxLjktMi4yDQoJYzAuNC0wLjQsMC44LTAuNiwxLjItMC42YzAuNCwwLDAuNywwLjEsMC45LDAuNGMwLjIsMC4zLDAuMywwLjYsMC4zLDAuOGMwLDAuMi0wLjIsMC43LTAuNSwxLjVjLTAuMywwLjgtMC43LDEuNy0xLjEsMi43DQoJYy0wLjQsMS0wLjcsMS41LTAuNywxLjZjMCwwLjEsMCwwLjIsMCwwLjNjMCwwLjEsMC4xLDAuMiwwLjIsMC4yYzAuMiwwLDAuNi0wLjMsMS4zLTAuOWMyLjEtMS44LDMuNi0yLjYsNC42LTIuNg0KCWMxLjksMCwyLjgsMSwyLjgsMi45Yy0wLjEsMS0wLjcsMi4zLTEuOCwzLjhjLTEuMSwxLjYtMi40LDMtNCw0LjNjLTEuNiwxLjMtMy4xLDEuOS00LjQsMS45Yy0wLjYsMC0xLjEtMC4xLTEuNS0wLjQNCgljLTAuNC0wLjMtMC43LTAuNi0xLTAuOWMtMC4yLTAuMy0wLjQtMC40LTAuNC0wLjRjLTAuMSwwLTAuMSwwLjEtMC4yLDAuMmMtMC4xLDAuMS0yLjcsNC40LTcuOCwxMi44Yy0xLjMsMi4xLTIuNiwzLjItMy45LDMuMg0KCWMtMC43LDAtMS4yLTAuMy0xLjYtMC45QzEyMy43LDQyLjEsMTIzLjUsNDEuNSwxMjMuNSw0MC44eiBNMTQ2LjIsMTljLTAuNywwLTIuMSwxLTQuMiwzLjFjLTIuMSwyLjEtMy4yLDMuNC0zLjIsMy45DQoJYzAsMC4xLDAuMSwwLjEsMC4yLDAuMWMxLDAsMi41LTAuOSw0LjYtMi44YzItMS45LDMtMy4zLDMtNEMxNDYuNSwxOS4xLDE0Ni40LDE5LDE0Ni4yLDE5eiBNMTU4LjIsMTQuMWMwLjIsMCwwLjQsMC4xLDAuNSwwLjMNCgljMC4yLDAuMiwwLjIsMC40LDAuMiwwLjZjMCwwLjItMC4xLDAuNS0wLjQsMC44Yy0xLDEuMy0xLjcsMi4xLTIuMSwyLjRjLTAuMywwLjMtMC41LDAuNS0wLjUsMC42YzAsMC4xLDAuMSwwLjIsMC4yLDAuMg0KCWMwLjIsMCwwLjktMC4yLDIuMi0wLjdjMS4zLTAuNSwyLjEtMC43LDIuNS0wLjdjMC40LDAsMC44LDAuMiwxLjIsMC41YzAuNCwwLjMsMC42LDAuNywwLjYsMS4zYzAsMC41LTAuOCwxLjctMi40LDMuNg0KCWMtMS42LDEuOC0yLjQsMy0yLjQsMy42YzAsMC4xLDAsMC4yLDAuMSwwLjJjMC4xLDAsMC40LTAuMSwwLjctMC4yYzAuMy0wLjIsMC42LTAuMywwLjYtMC4zYzAuMywwLDAuNCwwLjEsMC40LDAuMw0KCWMwLDAuOC0wLjcsMS43LTIsMi41Yy0xLjMsMC44LTIuNCwxLjItMy4zLDEuMmMtMC45LDAtMS42LTAuMy0yLjItMC44Yy0wLjYtMC41LTAuOC0xLjEtMC44LTJzMC40LTEuNywxLjItMi44DQoJYzAuOC0xLDEuNy0xLjgsMi41LTIuMmMwLjktMC40LDEuMy0wLjgsMS4zLTFjMC0wLjEsMC0wLjEsMC0wLjJjLTEuMiwwLjUtMi4xLDAuNy0yLjksMC43Yy0xLjUsMC0yLjItMC40LTIuMi0xLjMNCgljMC0xLDAuOS0yLjMsMi42LTMuOVMxNTcuMSwxNC40LDE1OC4yLDE0LjF6IE0xNjkuNSwyMS4ybDItMC4yYzAuOSwwLDEuNCwwLjUsMS40LDEuNGMwLDAuNS0wLjQsMS0xLjMsMS42cy0xLjgsMS4xLTIuNywxLjYNCgljLTAuOSwwLjUtMS4zLDAuOS0xLjMsMS4xYzAsMC4yLDAuMiwwLjMsMC42LDAuNGMwLjksMCwyLjctMC43LDUuMy0yLjJjMi42LTEuNSw0LTIuMiw0LjItMi4yYzAuNCwwLDAuNiwwLjIsMC42LDAuNg0KCWMwLDAuMy0wLjksMC45LTIuNiwyYy0xLjcsMS0zLjYsMi4xLTUuOCwzYy0yLjIsMS0zLjksMS40LTUuMSwxLjRjLTEuOCwwLTIuOC0xLTIuOC0yLjljMC0wLjYsMC40LTEuMiwxLjEtMS44DQoJYzAuOC0wLjcsMS41LTEuMiwyLjMtMS43YzAuOC0wLjUsMS4yLTAuOCwxLjItMC45YzAtMC4xLTAuMi0wLjMtMC42LTAuNGMtMS4xLTAuNS0xLjctMS4xLTEuNy0xLjljMC0xLjUsMS4yLTIuOSwzLjctNC4yDQoJYzIuNS0xLjQsNC44LTIsNy0yYzEuMiwwLDIuMSwwLjIsMi45LDAuN2MwLjgsMC40LDEuMiwxLjEsMS4yLDJjMCwwLjktMC42LDEuNy0xLjksMi41Yy0xLjIsMC44LTIuMSwxLjItMi42LDEuMg0KCWMtMC4yLDAtMC40LTAuMS0wLjYtMC4yYy0wLjItMC4xLTAuMi0wLjItMC4yLTAuNGMwLTAuMSwwLjQtMC4zLDEuMS0wLjZjMC43LTAuMywxLjEtMC42LDEuMS0wLjljMC0wLjEtMC4yLTAuMi0wLjYtMC4yDQoJYy0wLjQsMC0xLjYsMC40LTMuOCwxLjNjLTIuMSwwLjgtMy4yLDEuNC0zLjIsMS44QzE2OC4zLDIxLjEsMTY4LjcsMjEuMiwxNjkuNSwyMS4yeiBNMTgyLjksMjMuMWMtMS4xLDAtMi4xLTAuMy0zLjEtMC44DQoJYy0wLjktMC41LTEuNC0xLjMtMS40LTIuM2MwLTEuNCwxLTIuNSwyLjktMy41czMuOS0xLjUsNi0xLjVjMS4zLDAsMi4zLDAuMiwzLjEsMC43YzAuOCwwLjUsMS4yLDEuMSwxLjIsMi4xYzAsMC45LTAuNywxLjctMi4xLDIuNQ0KCWMtMS40LDAuNy0yLjMsMS4xLTIuNywxLjFjLTAuNSwwLTAuNy0wLjEtMC43LTAuM2MwLTAuMiwwLjEtMC4zLDAuMi0wLjRjMC4yLTAuMSwwLjYtMC4zLDEuMi0wLjZjMC42LTAuMywxLTAuNSwxLjMtMC42DQoJYzAuMy0wLjIsMC40LTAuMywwLjQtMC40YzAtMC4xLTAuMS0wLjItMC40LTAuMmMtMC45LDAtMi4zLDAuMy00LjIsMWMtMS45LDAuNi0yLjgsMS4xLTIuOCwxLjVjMCwwLjIsMC41LDAuNCwxLjYsMC40DQoJYzIuNiwwLDQsMS4xLDQsMy4yYzAsMC45LTAuNiwxLjgtMS43LDIuNmMtMS4xLDAuNy0yLjMsMS4zLTMuNCwxLjZjLTEuMiwwLjMtMi4xLDAuNS0yLjgsMC41Yy0wLjcsMC0xLjUtMC4zLTIuMy0xDQoJYy0wLjktMC42LTEuMy0xLjMtMS4zLTEuOXMwLjgtMS4xLDIuNS0xLjRjMC43LTAuMSwxLjctMC4zLDMtMC43YzEuMi0wLjQsMS44LTAuOCwxLjgtMS4xQzE4My4yLDIzLjIsMTgzLjEsMjMuMSwxODIuOSwyMy4xeg0KCSBNMTk1LjgsMjMuMWMtMS4xLDAtMi4xLTAuMy0zLjEtMC44Yy0wLjktMC41LTEuNC0xLjMtMS40LTIuM2MwLTEuNCwxLTIuNSwyLjktMy41czMuOS0xLjUsNi0xLjVjMS4zLDAsMi4zLDAuMiwzLjEsMC43DQoJYzAuOCwwLjUsMS4yLDEuMSwxLjIsMi4xYzAsMC45LTAuNywxLjctMi4xLDIuNWMtMS40LDAuNy0yLjMsMS4xLTIuNywxLjFjLTAuNSwwLTAuNy0wLjEtMC43LTAuM2MwLTAuMiwwLjEtMC4zLDAuMi0wLjQNCgljMC4yLTAuMSwwLjYtMC4zLDEuMi0wLjZjMC42LTAuMywxLTAuNSwxLjMtMC42YzAuMy0wLjIsMC40LTAuMywwLjQtMC40YzAtMC4xLTAuMS0wLjItMC40LTAuMmMtMC45LDAtMi4zLDAuMy00LjIsMQ0KCWMtMS45LDAuNi0yLjgsMS4xLTIuOCwxLjVjMCwwLjIsMC41LDAuNCwxLjYsMC40YzIuNiwwLDQsMS4xLDQsMy4yYzAsMC45LTAuNiwxLjgtMS43LDIuNmMtMS4xLDAuNy0yLjMsMS4zLTMuNCwxLjYNCgljLTEuMiwwLjMtMi4xLDAuNS0yLjgsMC41Yy0wLjcsMC0xLjUtMC4zLTIuMy0xYy0wLjktMC42LTEuMy0xLjMtMS4zLTEuOXMwLjgtMS4xLDIuNS0xLjRjMC43LTAuMSwxLjctMC4zLDMtMC43DQoJYzEuMi0wLjQsMS44LTAuOCwxLjgtMS4xQzE5NiwyMy4yLDE5NS45LDIzLjEsMTk1LjgsMjMuMXoiLz4NCjwvc3ZnPg0K"
        />
      </NuxtLink>
      <svg
        class="nav__close"
        @click="navToggle"
        fill="none"
        height="16"
        viewBox="0 0 16 16"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          clip-rule="evenodd"
          d="M5.17157 8.00003L0.585785 3.41424L3.41421 0.585815L8 5.1716L12.5858 0.585815L15.4142 3.41424L10.8284 8.00003L15.4142 12.5858L12.5858 15.4142L8 10.8285L3.41421 15.4142L0.585785 12.5858L5.17157 8.00003Z"
          fill="#030708"
          fill-rule="evenodd"
        />
      </svg>
      <div class="nav__socials">
        <a
          class="nav__socials-item"
          href="https://www.facebook.com/sandydancex"
          target="_blank"
        >
          <svg
            enable-background="new 0 0 56.693 56.693"
            height="37px"
            width="37px"
            version="1.1"
            viewBox="0 0 56.693 56.693"
            xml:space="preserve"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            title="Meta"
            alt="Meta"
          >
            <path
              d="M40.43,21.739h-7.645v-5.014c0-1.883,1.248-2.322,2.127-2.322c0.877,0,5.395,0,5.395,0V6.125l-7.43-0.029  c-8.248,0-10.125,6.174-10.125,10.125v5.518h-4.77v8.53h4.77c0,10.947,0,24.137,0,24.137h10.033c0,0,0-13.32,0-24.137h6.77  L40.43,21.739z"
            />
          </svg>
        </a>
        <a
          class="nav__socials-item"
          href="https://www.instagram.com/dancexpress702/"
          target="_blank"
        >
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 56.7 56.7"
            enable-background="new 0 0 56.7 56.7"
            xml:space="preserve"
            height="37px"
            width="37px"
            title="Instagram"
            alt="Instagram"
          >
            <g>
              <path
                d="M28.2,16.7c-7,0-12.8,5.7-12.8,12.8s5.7,12.8,12.8,12.8S41,36.5,41,29.5S35.2,16.7,28.2,16.7z M28.2,37.7c-4.5,0-8.2-3.7-8.2-8.2s3.7-8.2,8.2-8.2s8.2,3.7,8.2,8.2S32.7,37.7,28.2,37.7z"
              />
              <circle cx="41.5" cy="16.4" r="2.9" />
              <path
                d="M49,8.9c-2.6-2.7-6.3-4.1-10.5-4.1H17.9c-8.7,0-14.5,5.8-14.5,14.5v20.5c0,4.3,1.4,8,4.2,10.7c2.7,2.6,6.3,3.9,10.4,3.9h20.4c4.3,0,7.9-1.4,10.5-3.9c2.7-2.6,4.1-6.3,4.1-10.6V19.3C53,15.1,51.6,11.5,49,8.9z M48.6,39.9c0,3.1-1.1,5.6-2.9,7.3s-4.3,2.6-7.3,2.6H18c-3,0-5.5-0.9-7.3-2.6C8.9,45.4,8,42.9,8,39.8V19.3c0-3,0.9-5.5,2.7-7.3c1.7-1.7,4.3-2.6,7.3-2.6h20.6c3,0,5.5,0.9,7.3,2.7c1.7,1.8,2.7,4.3,2.7,7.2V39.9L48.6,39.9z"
              />
            </g>
          </svg>
        </a>
      </div>
    </nav>
    <slot />
    <footer class="footer">
      <p class="footer__copyright">
        © Dance Xpress 1995 - {{ currentYear }}. All Rights Reserved.
      </p>
    </footer>
  </div>
</template>
<script lang="ts" setup>
import { useCoreStore } from "@/stores/coreStore";
const coreStore = useCoreStore();

// HAMBURGER MENU
/// trigger
function navToggle() {
  coreStore.setToggleNav();
}
/// flags
const navFlag = computed(() => {
  if (coreStore.getShowNav) {
    return "nav nav--active";
  } else {
    return "nav";
  }
});

const currentYear = computed<number>(() => {
  return new Date().getFullYear();
});
</script>
<style lang="scss" scoped>
.footer {
  display: flex;
  flex-direction: row;
  background: $pink;
  position: relative;
  z-index: 9;

  &__copyright {
    font-size: #{fluid(12px, 18px)};
    text-align: center;
    width: 100%;
    padding: 25px 10px;
  }
}

.hamburger {
  display: none;

  @include laptop {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    position: fixed;
    z-index: 9;
    top: 0;
    background: rgba(255, 182, 193, 0.8);
    width: 100%;
    @include edge-padding;
  }

  &__link {
    width: #{fluid(150px, 225px)};
    margin-top: 15px;
  }

  &__toggle {
    cursor: pointer;
    width: #{fluid(60px, 85px)};
    height: #{fluid(60px, 85px)};
    margin-right: #{fluid(30px, 35px)};
  }
}

main {
  margin-top: 25px;
}

.nav {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  padding: 15px 75px;
  align-items: center;
  background: rgba(255, 182, 193, 0.8);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 10;

  @include laptop {
    display: flex;
    flex-direction: column;
    max-width: 90%;
    height: 100%;
    box-shadow: 20px 0px 30px rgba(0, 0, 0, 0.6);
    align-items: flex-start;
    padding: 25px 15px;
    visibility: none;
    transform: translateX(-100%);
    opacity: 0;
    transition: 0.25s ease-in-out;
  }

  &--active {
    @include laptop {
      visibility: visible;
      transform: translateX(0);
      opacity: 1;
      background: $pink;
    }
  }

  &__close {
    display: none;

    @include laptop {
      display: block;
      width: #{fluid(35px, 60px)};
      height: #{fluid(35px, 60px)};
      cursor: pointer;
      position: absolute;
      right: 25px;
    }
  }

  &__links {
    display: flex;
    flex-direction: row;
    gap: 10px;

    @include laptop {
      order: 2;
      flex-direction: column;
      margin-bottom: #{fluid(30px, 40px)};
    }

    &-item {
      font-size: #{fluid(20px, 24px)};
      font-family: $subtitle-font;
      transition: 0.15s ease-in-out;
      display: block;
      border-radius: 12px;
      position: relative;
      overflow: hidden;
      padding: 5px 0px;
      z-index: 1;

      @include laptop {
        font-size: #{fluid(24px, 27px)};
      }

      &:before {
        content: "";
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        height: 100%;
        background: $black;
        transition: 0.25s ease-in-out;
        z-index: 1;
        color: $pink;
      }

      &:hover {
        color: $pink;

        &:before {
          top: 0;
        }
      }

      &-text {
        z-index: 1;
        color: $black;
        position: relative;
        padding: 5px 11px;
        transition: 0.25s ease-in-out;

        &:hover,
        .router-link-exact-active & {
          color: $pink;
        }
      }
    }
  }

  &__logo {
    margin-left: auto;
    margin-right: auto;

    @include laptop {
      order: 1;
      margin-left: 0;
      margin-bottom: #{fluid(35px, 50px)};
      display: flex;
      justify-content: space-between;
      width: 100%;
    }

    &-img {
      @include laptop {
        width: #{fluid(150px, 225px)};
      }
    }

    &.router-link-exact-active {
      background: transparent !important;
    }
  }

  .router-link-exact-active {
    background: $black;

    &.nav__links {
      &-item {
        &-text {
          color: $pink;
        }
      }
    }
  }

  &__socials {
    margin-left: auto;
    display: flex;
    flex-direction: row;
    gap: 12px;

    @include laptop {
      order: 3;
      margin-left: 0;
    }

    &-item {
      display: flex;
      border-radius: 2px;
      position: relative;
      overflow: hidden;
      border-radius: 12px;

      &:before {
        content: "";
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        height: 100%;
        background: $black;
        transition: 0.25s ease-in-out;
        z-index: 1;
      }

      svg {
        transition: 0.25s ease-in-out;
        width: 45px;
        height: 45px;
        padding: 8px;

        &:hover {
          fill: $pink;
          z-index: 2;
          position: relative;
        }
      }

      &:hover {
        &:before {
          top: 0;
        }
      }
    }
  }
}
</style>
