export const UkLanguage = {
  Home: 'Home',
  About: 'About',
  Services: 'Services',
  ContactUs: 'Contact Us',
  Talent: 'Talent',
  Others: 'Others',
  AgencyMembers: 'Our Agency Members',
  PrivacyPolitics: 'Privacy Policy',
  TermsAndConditions: 'Terms and Conditions',
  LearnMore: 'Learn More',
  Find: 'Find',
  TalentedProfessionals: 'Talented Professionals',
  HomeBannerDescription:
    'Engage is a digital marketing agency specializing in social media, with various professionals in fields such as Marketing and Advertising, Management, Design, and Digital Content Production.',
  Portuguese: 'Portuguese',
  English: 'English',
  OurInfluencers: 'Our Influencers',
  Comedy: 'Comedy',
  LifeStyle: 'Lifestyle',
  Beauty: 'Beauty',
  Food: 'Food',
  Sport: 'Sports',
  Gaming: 'Gaming',
  Family: 'Family',
  Technology: 'Technology',
  Fashion: 'Fashion',
  MarianaBossyDescription1: 'Influencer and Content Creator',
  TalentSeparatorDescription:
    'We have +100 influencers spread across different niches.',
  DiverseCommunityAndNiches: 'Communities, Niches or Hobbies',
  WeHaveTheIdealCreator: 'We have the ideal creator',
  Visit: 'Visit',
  TalentContactUsTitle: 'Your partners for the perfect partnership',
  TalentContactUsDescription:
    "Access the nacional's largest roster of verified content creators, celebrities, and athletes with an affinity for your target audience.",
} as const

export type LanguageType = { [K in keyof typeof UkLanguage]: string }
