import BasePage from "./BasePage.js";
import { LandingPageElements } from "../pageElements/LandingPageEle.js";

class LandingPage extends BasePage {
  constructor(page) {
    super(page);

    // Navigation Bar
    this.navOccasion        = page.locator(LandingPageElements.navOccasion);
    this.navWorking         = page.locator(LandingPageElements.navWorking);
    this.navGiftCards       = page.locator(LandingPageElements.navGiftCards);
    this.navLogin           = page.locator(LandingPageElements.navLogin);
    this.navHearSongs       = page.locator(LandingPageElements.navHearSongs);
    this.navLogo            = page.locator(LandingPageElements.navLogo);
    this.navSignIn          = page.locator(LandingPageElements.navSignIn);
    this.navCreateSongCTA   = page.locator(LandingPageElements.navCreateSongCTA);
    this.navHamburger       = page.locator(LandingPageElements.navHamburger);

    // Video Modal
    this.videoModalCloseBtn = page.locator(LandingPageElements.videoModalCloseBtn);

    // Hero Section
    this.heroBadge          = page.locator(LandingPageElements.heroBadge);
    this.heroHeadline       = page.locator(LandingPageElements.heroHeadline);
    this.heroBodyCopy       = page.locator(LandingPageElements.heroBodyCopy);
    this.heroBgImage        = page.locator(LandingPageElements.heroBgImage);
    this.heroMascot         = page.locator(LandingPageElements.heroMascot);

    // Hero Input / CTA Bar
    this.heroInput          = page.locator(LandingPageElements.heroInput);
    this.heroCreateBtn      = page.locator(LandingPageElements.heroCreateBtn);
    this.heroWatchLink      = page.locator(LandingPageElements.heroWatchLink);

    // Song Cards Section
    this.songCardsHeading   = page.locator(LandingPageElements.songCardsHeading);
    this.songCardsTapLabel  = page.locator(LandingPageElements.songCardsTapLabel);
    this.songCardFirst      = page.locator(LandingPageElements.songCardFirst);
    this.songCardFirstImage = page.locator(LandingPageElements.songCardFirstImage);
    this.songCardFirstTitle = page.locator(LandingPageElements.songCardFirstTitle);
    this.songCardFirstArtist= page.locator(LandingPageElements.songCardFirstArtist);
    this.songCardPlayBtn    = page.locator(LandingPageElements.songCardPlayBtn);

    // How It Works Section
    this.howItWorksEyebrow  = page.locator(LandingPageElements.howItWorksEyebrow);
    this.howItWorksHeading  = page.locator(LandingPageElements.howItWorksHeading);
    this.howItWorksSubcopy  = page.locator(LandingPageElements.howItWorksSubcopy);
    this.howItWorksNoBold   = page.locator(LandingPageElements.howItWorksNoBold);
    this.howStep01Circle    = page.locator(LandingPageElements.howStep01Circle);
    this.howStep02Circle    = page.locator(LandingPageElements.howStep02Circle);
    this.howStep03Circle    = page.locator(LandingPageElements.howStep03Circle);
    this.howStep04Circle    = page.locator(LandingPageElements.howStep04Circle);
    this.howConnectorLine   = page.locator(LandingPageElements.howConnectorLine);
    this.howStep01Title     = page.locator(LandingPageElements.howStep01Title);
    this.howStep01Desc      = page.locator(LandingPageElements.howStep01Desc);
    this.howStep02Title     = page.locator(LandingPageElements.howStep02Title);
    this.howStep02Desc      = page.locator(LandingPageElements.howStep02Desc);
    this.howStep03Title     = page.locator(LandingPageElements.howStep03Title);
    this.howStep03Desc      = page.locator(LandingPageElements.howStep03Desc);
    this.howStep04Title     = page.locator(LandingPageElements.howStep04Title);
    this.howStep04Desc      = page.locator(LandingPageElements.howStep04Desc);

    // Say It Your Way Section
    // this.sayItEyebrow       = page.locator(LandingPageElements.sayItEyebrow);
    this.sayItHeading       = page.locator(LandingPageElements.sayItHeading);
    // this.sayItBodyCopy      = page.locator(LandingPageElements.sayItBodyCopy);
    // this.sayItYourWordsLabel= page.locator(LandingPageElements.sayItYourWordsLabel);
    // this.sayItInputBox      = page.locator(LandingPageElements.sayItInputBox);
    // this.sayItTabOriginal   = page.locator(LandingPageElements.sayItTabOriginal);
    // this.sayItTabAlbumArt   = page.locator(LandingPageElements.sayItTabAlbumArt);
    // this.sayItTabLyrics     = page.locator(LandingPageElements.sayItTabLyrics);

    // Audio Player Section
    this.audioSectionHeading= page.locator(LandingPageElements.audioSectionHeading);
    // this.audioPlayerCard    = page.locator(LandingPageElements.audioPlayerCard);
    // this.audioAlbumArt      = page.locator(LandingPageElements.audioAlbumArt);
    // this.audioSongTitle     = page.locator(LandingPageElements.audioSongTitle);
    // this.audioArtistOccasion= page.locator(LandingPageElements.audioArtistOccasion);
    // this.audioPlayBtn       = page.locator(LandingPageElements.audioPlayBtn);
    // this.audioLikeIcon      = page.locator(LandingPageElements.audioLikeIcon);
    // this.audioShareIcon     = page.locator(LandingPageElements.audioShareIcon);
    // this.audioDownloadIcon  = page.locator(LandingPageElements.audioDownloadIcon);

    // Gift Section
    this.giftEyebrow        = page.locator(LandingPageElements.giftEyebrow);
    this.giftHeading        = page.locator(LandingPageElements.giftHeading);
    this.giftBodyCopy       = page.locator(LandingPageElements.giftBodyCopy);

    // Gift Package Section
    this.giftPkgHeading       = page.locator(LandingPageElements.giftPkgHeading);
    this.giftPkgMainImage     = page.locator(LandingPageElements.giftPkgMainImage);
    this.giftPkgOriginalLabel = page.locator(LandingPageElements.giftPkgOriginalLabel);
    this.giftPkgAlbumCard     = page.locator(LandingPageElements.giftPkgAlbumCard);
    this.giftPkgAlbumLabel    = page.locator(LandingPageElements.giftPkgAlbumLabel);
    this.giftPkgAlbumDesc     = page.locator(LandingPageElements.giftPkgAlbumDesc);
    this.giftPkgVideoCard     = page.locator(LandingPageElements.giftPkgVideoCard);
    this.giftPkgVideoLabel    = page.locator(LandingPageElements.giftPkgVideoLabel);

    // Testimonials Section
    this.testimonialsEyebrow    = page.locator(LandingPageElements.testimonialsEyebrow);
    this.testimonialsHeading    = page.locator(LandingPageElements.testimonialsHeading);
    this.testimonialsMainText   = page.locator(LandingPageElements.testimonialsMainText);
    this.testimonialsWaveform   = page.locator(LandingPageElements.testimonialsWaveform);
    this.testimonialsTheSong    = page.locator(LandingPageElements.testimonialsTheSong);
    // this.testimonialsStarFirst  = page.locator(LandingPageElements.testimonialsStarFirst);
    this.testimonialsAnniversary= page.locator(LandingPageElements.testimonialsAnniversary);
    this.testimonialsGraduation = page.locator(LandingPageElements.testimonialsGraduation);
    this.testimonialsMemorial   = page.locator(LandingPageElements.testimonialsMemorial);

    // Pricing Section
    this.pricingHeading     = page.locator(LandingPageElements.pricingHeading);
    this.pricingMostPopular = page.locator(LandingPageElements.pricingMostPopular);
    this.plan1Title         = page.locator(LandingPageElements.plan1Title);
    this.plan1Price         = page.locator(LandingPageElements.plan1Price);
    // this.plan1Desc          = page.locator(LandingPageElements.plan1Desc);
    // this.plan1Feature1      = page.locator(LandingPageElements.plan1Feature1);
    // this.plan1Feature2      = page.locator(LandingPageElements.plan1Feature2);
    // this.plan1Feature3      = page.locator(LandingPageElements.plan1Feature3);
    // this.plan1Feature4      = page.locator(LandingPageElements.plan1Feature4);
    // this.plan1CTA           = page.locator(LandingPageElements.plan1CTA);
    this.plan2Title         = page.locator(LandingPageElements.plan2Title);
    // this.plan2Desc          = page.locator(LandingPageElements.plan2Desc);
    // this.plan2Feature1      = page.locator(LandingPageElements.plan2Feature1);
    // this.plan2Feature2      = page.locator(LandingPageElements.plan2Feature2);
    // this.plan2Feature3      = page.locator(LandingPageElements.plan2Feature3);
    // this.plan2Feature4      = page.locator(LandingPageElements.plan2Feature4);
    this.plan2CTA           = page.locator(LandingPageElements.plan2CTA);
    this.plan3Title         = page.locator(LandingPageElements.plan3Title);
    // this.plan3Feature1      = page.locator(LandingPageElements.plan3Feature1);
    // this.plan3Feature2      = page.locator(LandingPageElements.plan3Feature2);
    // this.plan3Feature3      = page.locator(LandingPageElements.plan3Feature3);
    // this.plan3Feature4      = page.locator(LandingPageElements.plan3Feature4);
    this.plan3CTA           = page.locator(LandingPageElements.plan3CTA);

    // FAQ Section
    this.faqHeading         = page.locator(LandingPageElements.faqHeading);
    this.faqQuestion1       = page.locator(LandingPageElements.faqQuestion1);
    this.faqQuestion2       = page.locator(LandingPageElements.faqQuestion2);
    this.faqQuestion3       = page.locator(LandingPageElements.faqQuestion3);
    this.faqQuestion4       = page.locator(LandingPageElements.faqQuestion4);
    this.faqQuestion5       = page.locator(LandingPageElements.faqQuestion5);
    this.faqQuestion6       = page.locator(LandingPageElements.faqQuestion6);
    this.faqExpandIcon      = page.locator(LandingPageElements.faqExpandIcon);
  }

  async navigateTo() {
    await this.goto("/");
  }
}

export default LandingPage;
