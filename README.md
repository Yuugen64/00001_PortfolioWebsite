<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/Yuugen64/00001_PortfolioWebsite/blob/main/README.md">
    <img src="assets/constructionIcon.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Portfolio</h3>
  
  <br />
  <p align="center">[View on Github Pages](https://yuugen64.github.io/00001_PortfolioWebsite/)</p>

  </p>
</p>



<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#usage)
* [Roadmap](#roadmap)
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)




<!-- ABOUT THE PROJECT -->
## About The Project

<!-- [![Product Name Screen Shot][product-screenshot]](https://example.com) -->


### Built With
* HTML
* CSS
* JavaScript - ES6



<!-- GETTING STARTED -->
## Getting Started

There is no complicated install process here. If you'd like to download the code, simply click the green button at the top righ of this section to download the zip.



### Prerequisites

There are no prerequisites to running this site!
```sh
:-)
```

### Installation

1. Click the green download button to get the .zip!



<!-- USAGE EXAMPLES -->
## Usage

To find a job!



<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/Yuugen64/00001_PortfolioWebsite/issues) for a list of proposed features (and known issues).



<!-- CHANGELOG -->
## Changelog:

11.3.20:
- Set up the repository and the core framework for the site.

### Main Branch:

11.3.20:
- [001-0.0.1]: Added the core layout of the site and followed an excellent guide by othneildrew on Github to better organize my Readme.
- [002-0.0.1]: Readme Formatting >> Tweaked the formatting for the readme, since the markdown didn't work quite as expected on the first try.
- [003-0.0.2]: Layout + Prestyle >> Configured the global CSS grid (trying a different approach this time) and added the basic styling elements for the mobile version."
- [004-0.0.2]: Fixing Mobile Grid >> Trying to seperate the global grid out into areas that make sense for the overall flow for the website.
- [005-0.0.3]: Fixed intro area for mobile >> Used a sub-grid for the intro so that it has its own unique styling irrespective of the global-grid. Added a fourth CSS page for the smaller styling changes for the website."
- [006-0.0.4]: Added test photo + styling >> Added a larger test photo to the site so that the styling automatically handles larger photos on the mobile version. Also got the general styling to line up properly.
- [007-0.0.4]: Added click/tap toggle >> For the mobile version of the site it makes sense for the user to tap on the individual sections and then scroll through the information there which is too long to display fully on the site normally."
- [008-0.0.4]: Added overscroll behavior >> Still need to try and get the elements to positon in the full size of the viewport; currently the area where the parent is affects how the expanded version displays."
- [009-0.0.5]: Fixed position >> Set the position attribute to fixed (documentation puns lol) to solve the content displaying relative to parent container instead of relative to the viewport.
- [010-0.0.5]: Modal section >> Added a section for modals since the specific effect that I was oroginally aiming for does not play well with CSS grid. WIll work on adding the modals for each section as well as the touch layer.

11.4.20:
- [011-0.0.5]: Was still having trouble implementing the modals in the way that I wanted to. All of the methods seem to cause issues with CSS grid either re-aligning or otherwise messing up the order of the 'cards'. Will attempt another approach next time, as there are other things I have to address today.

11.5.20:
- [012-0.0.5]: Modals >> Implemented the necessary core functionality for modals to display in the mobile version. Also added new feature issues and a milestone for the project to better practice dev ops procedures assuming that in the future I will have to collaborate with other developers."
- [013-0.0.6]: Modal slide in + scroll issues >> Successfully implemented the modal for projects animating in and the touchlayer fading in underneath it. However, after the animation is triggered once, the user can no longer scroll down the main page. Also, there is an issue with <html> area blowing out past the global-grid."
- [014-0.0.6]: Fixed html overflow issue >> Forced the html and global css grid to have fixed postioning and bounded them to the display itself so the page functions more like a native app on a smartphone in portrait mode.
- [015-0.0.7]: Modals implemented + profile picture updated >> Implemented the modals for each section with working animations. Also added in my personal profile picture instead of the test photo that I had been previously using to test layout styling.
- [016-0.0.8]: Card Images >> Added background images and basic sub styling to cards. Will address final main page design and then modal design next.
- [017-0.0.8]: Card styling >> Added background images (royalty free from pixabay) to the card sections for the portfolio website. Also added in the neomorphism style to the intro section and the cards. Will tweak the name section and banner of the intro section, as well as add in the styling for the card modals next.
- [018-0.0.8]: Touch layer issues >> Resolved an issue where the touchLayer logic and modal show/hide was incorrectly toggling other modals and not toggling when the layer is tapped.
- [019-0.0.9]: Modal content styling >> Formatted the way information is displayed in the modals. Added the ability to make styled posts for projects and challenges with a nice background effect to differentiate between the various posts. Formatted text margins, padding, and alignment as well as weight for various kinds of text. All thats left now for version 1.0 is to finalize the stlying, add the contact information and verify the mobile version aligns properly on the real test device (Chrome looks great but iOS is displaying differntly atm).

11.6.20:
- [020-0.0.9]: iOS mobile styling portrait >> Attempted to fix the iOS mobile styling in portrait mode by adjusting some of the values for the cards. The way the site is shaping up, it will utilize more hard-coded values with @media queries for various platform sizes.

11.9.20:
- [021-0.1.0]: Portrait mode MVP reached >> Started working on the landscape mode for mobile phones. Will update issues to reflect this progress.
- [022-0.1.1]: Landscape styling >> added in the media queries for landscape mobile devices and re-oredered the global grid to reflect the orientation change. Will test on iPhone XS.
- [023-0.1.2]: Mobile landscape fix? >> Added device specific media queries for the devices I am testing on (iPhone X, iPad Mini 5) in the hopes that the orientation will display properly regardless of high density displays. This also on top of not blowing out desktop designs.
- [024-0.1.2]: Added @media queries to subStyle.css to start addressing modals. Re-added the margin for intro grid into the correct @media query to hopefully solve the intro 'card' not aligning properly in landscape mode.
- [025-0.1.3]: Landscape styling tweaks >> Attempted to smooth out some of the styling issues with landscape mode on mobile phones.

11.7.20:
- [026-0.1.4]: Version 2.0 addition >> Re-worked the basic tablet portrait styling. Started wrapping my head around the logic re-work that will have to occur as I attempt to make the tablet version functional. These changes my also influence the next big milestone (1.5) as I may re-cycle some of the problem solving to address the modal problem in landscape mobile.
- [027-0.1.4]: Tablet portrait mode intro area fix >> Adjusted the layout for the intro area to keep the profile picture from blowing out of the grid.
- [028-0.1.4]: Re-worked the basic on-click logic for the cards and modals on tablet portrait view. Utilized a simple z-index hack to keep from re-writing the entire approach to the content.
  




<!-- CONTRIBUTING -->
## Contributing

For this particular project, there have been no outside contributions. If that changes in the future I will be sure to update this seciton to accurately credit those authors.



<!-- CONTACT -->
## Contact

Andrew Babler - ababler008@gmail.com

Project Link: [https://github.com/Yuugen64/00001_PortfolioWebsite/issues](https://github.com/Yuugen64/00001_PortfolioWebsite/issues)



<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
* [Othneildrew](https://github.com/othneildrew/Best-README-Template/blob/master/README.md) - For providing a great template for leveling up my README!
* Blueprint Image by <a href="https://pixabay.com/users/xresch-7410129/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=4056027">xresch</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=4056027">Pixabay</a>
* Software Image by Image by <a href="https://pixabay.com/users/xresch-7410129/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3682509">xresch</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3682509">Pixabay</a>
* Search Bar Image by Image by <a href="https://pixabay.com/users/geralt-9301/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=4999181">Gerd Altmann</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=4999181">Pixabay</a>

