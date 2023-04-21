// Generated by https://quicktype.io
//
// To change quicktype's target language, run command:
//
//   "Set quicktype target language"

export interface GameData {
    id:                          number;
    slug:                        string;
    name:                        string;
    name_original:               string;
    description:                 string;
    metacritic:                  number | null;
    metacritic_platforms:        MetacriticPlatform[];
    released:                    string;
    tba:                         boolean;
    updated:                     string;
    background_image:            string;
    background_image_additional: string;
    website:                     string;
    rating:                      number;
    rating_top:                  number;
    ratings:                     Rating[];
    reactions:                   { [key: string]: number };
    added:                       number;
    added_by_status:             AddedByStatus;
    playtime:                    number;
    screenshots_count:           number;
    movies_count:                number;
    creators_count:              number;
    achievements_count:          number;
    parent_achievements_count:   number;
    reddit_url:                  string;
    reddit_name:                 string;
    reddit_description:          string;
    reddit_logo:                 string;
    reddit_count:                number;
    twitch_count:                number;
    youtube_count:               number;
    reviews_text_count:          number;
    ratings_count:               number;
    suggestions_count:           number;
    alternative_names:           string[];
    metacritic_url:              string;
    parents_count:               number;
    additions_count:             number;
    game_series_count:           number;
    user_game:                   null;
    reviews_count:               number;
    saturated_color:             string;
    dominant_color:              string;
    parent_platforms:            ParentPlatform[];
    platforms:                   PlatformElement[];
    stores:                      Store[];
    developers:                  Developer[];
    genres:                      Developer[];
    tags:                        Developer[];
    publishers:                  Developer[];
    esrb_rating:                 EsrbRating | null;
    clip:                        null;
    description_raw:             string;
    price:                       number;
}

export interface AddedByStatus {
    yet:     number;
    owned:   number;
    beaten:  number;
    toplay:  number;
    dropped: number;
    playing: number;
}

export interface Developer {
    id:               number;
    name:             string;
    slug:             string;
    games_count:      number;
    image_background: string;
    domain?:          string;
    language?:        string;
}

export enum Domain {
    AppsAppleCOM = "apps.apple.com",
    EpicgamesCOM = "epicgames.com",
    GogCOM = "gog.com",
    MarketplaceXboxCOM = "marketplace.xbox.com",
    MicrosoftCOM = "microsoft.com",
    NintendoCOM = "nintendo.com",
    PlayGoogleCOM = "play.google.com",
    StorePlaystationCOM = "store.playstation.com",
    StoreSteampoweredCOM = "store.steampowered.com",
}

export enum Language {
    Eng = "eng",
}

export enum Color {
    The0F0F0F = "0f0f0f",
}

export interface EsrbRating {
    id:   number;
    name: string;
    slug: string;
}

export enum Name {
    AdultsOnly = "Adults Only",
    Android = "Android",
    AppleMacintosh = "Apple Macintosh",
    Everyone = "Everyone",
    Everyone10 = "Everyone 10+",
    IOS = "iOS",
    Linux = "Linux",
    Mature = "Mature",
    Nintendo = "Nintendo",
    PC = "PC",
    PlayStation = "PlayStation",
    Teen = "Teen",
    Web = "Web",
    Xbox = "Xbox",
}

export enum Slug {
    AdultsOnly = "adults-only",
    Android = "android",
    Everyone = "everyone",
    Everyone10Plus = "everyone-10-plus",
    Ios = "ios",
    Linux = "linux",
    MAC = "mac",
    Mature = "mature",
    Nintendo = "nintendo",
    PC = "pc",
    Playstation = "playstation",
    Teen = "teen",
    Web = "web",
    Xbox = "xbox",
}

export interface MetacriticPlatform {
    metascore: number;
    url:       null | string;
    platform:  MetacriticPlatformPlatform;
}

export interface MetacriticPlatformPlatform {
    platform: number;
    name:     string;
    slug:     string;
}

export interface ParentPlatform {
    platform: EsrbRating;
}

export interface PlatformElement {
    platform:     PlatformPlatform;
    released_at:  null | string;
    requirements: Requirements;
}

export interface PlatformPlatform {
    id:               number;
    name:             string;
    slug:             string;
    image:            null;
    year_end:         null;
    year_start:       number | null;
    games_count:      number;
    image_background: string;
}

export interface Requirements {
    minimum?:      string;
    recommended?: string;
    devices?: string[] | string;
}

export interface Rating {
    id:      number;
    title:   string;
    count:   number;
    percent: number;
}

export enum Title {
    Exceptional = "exceptional",
    Meh = "meh",
    Recommended = "recommended",
    Skip = "skip",
}

export interface Store {
    id:    number;
    url:   string;
    store: Developer;
}
