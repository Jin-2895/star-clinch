export interface Category {
  category_banner_image: string;
  category_icon_image: string;
  description: string;
  id: number;
  job_slug: string;
  name: string;
  parent_category: null;
  seo_meta: string;
  seo_title: string;
  slug: string;
  value: string;
}

export interface SubCategory {
  category_banner_image: string;
  category_icon_image: string;
  description: string;
  id: number;
  job_slug: string;
  name: string;
  parent_category: null;
  seo_meta: string;
  seo_title: string;
  slug: string;
  value: string;
}

export interface Section1Item {
  name?: string;
  value?: string | null;
}

export interface Section2Video {
  name: string;
  value: string;
}

export interface Section3Heading {
  name: string;
  value: string;
  button_text: string;
}

export interface Section3Image {
  name: string;
  value: string;
}

export interface Section4Image {
  name: string;
  value: string;
}

export interface Section5Data {
  name: string;
  value: string;
}

export interface Section6Data {
  name: string;
  value: string;
}

export interface Section7Heading {
  name: string;
  value: string;
  button_text: string;
}

export interface Section8Image {
  name: string;
  value: string;
}

export interface Section9Image {
  name: string;
  value: string;
}

export interface Section10Image {
  name: string;
  category: string;
  image: string;
  slug: string;
}

export interface Section11Heading {
  name: string;
  value: string;
}

export interface Section2Heading { 
  name: string; 
  value: string 
}

export interface HomeData {
  categories: Category[];
  'section-1': Section1Item[];
  'section-2-heading': Section2Heading[];
  'section-2-videos': Section2Video[];
  'section-3-heading': Section3Heading[];
  'section-3-images': Section3Image[];
  'section_4_heading': Section3Heading[];
  'section_4_images': Section4Image[];
  'section_5_heading': Section3Heading[];
  'section_5_data ': Section5Data[];
  'section_6_heading': Section3Heading[];
  'section_6_data': Section6Data[];
  'section_7_heading': Section7Heading[];
  'section_8_heading': Section3Heading[];
  'section_8_images': Section8Image[];
  'section_9_heading': Section3Heading[];
  'section_9_images': Section9Image[];
  'section_10_heading': Section3Heading[];
  'section_10_images': Section10Image[];
  'section_11_heading': Section11Heading[];
}


export interface Main {
  categories: Category[];
  sub_categories: SubCategory[];
}

export interface ArtistList {
  city: string;
  id: number;
  languages: string;
  performance_duration: string;
  professional_name: string;
  profile_pic: string;
  slug: string;
  usp: string;
}

export interface Cities {
  city: string;
  city_slug: string;
  id: number;
  state: string;
}

export interface Events {
  e_slug: string;
  event_name: string;
  id: number;
  key_name: string;
}

export interface Genders {
  g_slug: string;
  gender: string;
  id: number;
}

export interface Languages {
  id: number;
  l_slug: string;
  language_name: string;
}

export interface Meta {
  description: string;
  keywords: string[];
  og_title: string;
  site_name: string;
  title: string;
}

export interface VariousArtist {
  allowed_fiter_dict: {
    e: number;
    g: number;
    l: number;
    lang: number;
    sub_cat: number;
  };
  artist_list: ArtistList[];
  artists_pages: string;
  c_slug: string;
  categories: Category[];
  category: Category;
  cities: Cities[];
  events: Events[];
  filter_title: {
    b: null;
    e: null;
    g: null;
    l: null;
    lang: null;
  };
  genders: Genders[];
  h1_heading: string;
  has_next: boolean;
  languages: Languages;
  meta: Meta;
  next_page: number;
  path: string;
  possible: {
    b: string[];
    e: string[];
    g: string[];
    l: string[];
    lang: string[];
  };

  selected_cat: string;
  selected_slug: null
  selected_subcat: null;
  sub_categories: SubCategory[];
  subcat_slug: null;
}

export interface ArtistProfile {
  id: number
      professional_name: string
      slug: string
      sku: string
      usp: string
      description: string
      category_name: string
      subcategory: string
      subcategory_id: string
      min_price: number
      max_price: number
      banner_image: string
      profile_pic: string
      created: null
      updated: string
      created_by: string
      updated_by: string
      airtableid: string
      published: string
      rating: number
      gender: string
      pitchcount: number
      gigcount: number
      profile_status: string
      any: null
      awards: null
      performances: null
      trainings: null
      category: string
}

export interface ArtistProfileVideo {
    id: number
    artist_id: number
    media_name: string
    media_value: string
    added_on: string
}

export interface Cat {
  id: number
  name: string
  slug: string
  description: string
  category_banner_image: string
  category_icon_image: string
  seo_title: string
  seo_meta: string
  value: string
  job_slug: string
  parent_category: null
}

export interface BookingInfo {
  id: number
  city: string
  open_to_travel: string
  events_preferred: string
  languages: string
  state: string
  performing_performers: number
  performing_performers_details: null,
  off_stage_performers: number
  performance_duration: string
  additional_info: string
  other_requirements: string
  show_price: null
}

export interface EventList {
    id: 1,
    event_name: string
    key_name: string
    e_slug: string
}


export interface Profile {
  categories: Category[]
  sub_categories: SubCategory[]
  artist: ArtistProfile
  artist_images: string[]
  artist_videos: ArtistProfileVideo[]
  artist_audios: []
  meta: Meta
  tags: boolean
  cat: Cat
  bookinginfo: BookingInfo
  performing_performers: null
  events_list: EventList[]
  shortlist_profile: boolean
  city: Cities,
  subscribe: null
  comments: null
  replies: null
  rating_avg: null
  link_allowed_filter: null
  reply_count: null
  related_artists: ArtistProfile[]
  total_time: number
  day: number
  month: number
  artist_rcount: number
  artist_rvalue: number
  usp: string
}