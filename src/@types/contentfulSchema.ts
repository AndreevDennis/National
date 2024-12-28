export type Maybe<T> = T;
export type InputMaybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  Dimension: any;
  HexColor: any;
  JSON: any;
  Quality: any;
};

/** Стаття для блогу [See type definition](https://app.contentful.com/spaces/72hh1iccowpx/content_types/article) */
export type Article = Entry & _Node & {
  __typename?: 'Article';
  _id: Scalars['ID'];
  contentfulMetadata: ContentfulMetadata;
  date: Maybe<Scalars['DateTime']>;
  description: Maybe<Scalars['String']>;
  image: Maybe<Asset>;
  linkedFrom: Maybe<ArticleLinkingCollections>;
  slug: Maybe<Scalars['String']>;
  sys: Sys;
  text: Maybe<ArticleText>;
  title: Maybe<Scalars['String']>;
};


/** Стаття для блогу [See type definition](https://app.contentful.com/spaces/72hh1iccowpx/content_types/article) */
export type ArticleDateArgs = {
  locale: InputMaybe<Scalars['String']>;
};


/** Стаття для блогу [See type definition](https://app.contentful.com/spaces/72hh1iccowpx/content_types/article) */
export type ArticleDescriptionArgs = {
  locale: InputMaybe<Scalars['String']>;
};


/** Стаття для блогу [See type definition](https://app.contentful.com/spaces/72hh1iccowpx/content_types/article) */
export type ArticleImageArgs = {
  locale: InputMaybe<Scalars['String']>;
  preview: InputMaybe<Scalars['Boolean']>;
};


/** Стаття для блогу [See type definition](https://app.contentful.com/spaces/72hh1iccowpx/content_types/article) */
export type ArticleLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Стаття для блогу [See type definition](https://app.contentful.com/spaces/72hh1iccowpx/content_types/article) */
export type ArticleSlugArgs = {
  locale: InputMaybe<Scalars['String']>;
};


/** Стаття для блогу [See type definition](https://app.contentful.com/spaces/72hh1iccowpx/content_types/article) */
export type ArticleTextArgs = {
  locale: InputMaybe<Scalars['String']>;
};


/** Стаття для блогу [See type definition](https://app.contentful.com/spaces/72hh1iccowpx/content_types/article) */
export type ArticleTitleArgs = {
  locale: InputMaybe<Scalars['String']>;
};

export type ArticleCollection = {
  __typename?: 'ArticleCollection';
  items: Array<Maybe<Article>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ArticleFilter = {
  AND: InputMaybe<Array<InputMaybe<ArticleFilter>>>;
  OR: InputMaybe<Array<InputMaybe<ArticleFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  date: InputMaybe<Scalars['DateTime']>;
  date_exists: InputMaybe<Scalars['Boolean']>;
  date_gt: InputMaybe<Scalars['DateTime']>;
  date_gte: InputMaybe<Scalars['DateTime']>;
  date_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  date_lt: InputMaybe<Scalars['DateTime']>;
  date_lte: InputMaybe<Scalars['DateTime']>;
  date_not: InputMaybe<Scalars['DateTime']>;
  date_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  description: InputMaybe<Scalars['String']>;
  description_contains: InputMaybe<Scalars['String']>;
  description_exists: InputMaybe<Scalars['Boolean']>;
  description_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not: InputMaybe<Scalars['String']>;
  description_not_contains: InputMaybe<Scalars['String']>;
  description_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  image_exists: InputMaybe<Scalars['Boolean']>;
  slug: InputMaybe<Scalars['String']>;
  slug_contains: InputMaybe<Scalars['String']>;
  slug_exists: InputMaybe<Scalars['Boolean']>;
  slug_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug_not: InputMaybe<Scalars['String']>;
  slug_not_contains: InputMaybe<Scalars['String']>;
  slug_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys: InputMaybe<SysFilter>;
  text_contains: InputMaybe<Scalars['String']>;
  text_exists: InputMaybe<Scalars['Boolean']>;
  text_not_contains: InputMaybe<Scalars['String']>;
  title: InputMaybe<Scalars['String']>;
  title_contains: InputMaybe<Scalars['String']>;
  title_exists: InputMaybe<Scalars['Boolean']>;
  title_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not: InputMaybe<Scalars['String']>;
  title_not_contains: InputMaybe<Scalars['String']>;
  title_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ArticleLinkingCollections = {
  __typename?: 'ArticleLinkingCollections';
  entryCollection: Maybe<EntryCollection>;
};


export type ArticleLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale: InputMaybe<Scalars['String']>;
  preview: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum ArticleOrder {
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type ArticleText = {
  __typename?: 'ArticleText';
  json: Scalars['JSON'];
  links: ArticleTextLinks;
};

export type ArticleTextAssets = {
  __typename?: 'ArticleTextAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type ArticleTextEntries = {
  __typename?: 'ArticleTextEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type ArticleTextLinks = {
  __typename?: 'ArticleTextLinks';
  assets: ArticleTextAssets;
  entries: ArticleTextEntries;
  resources: ArticleTextResources;
};

export type ArticleTextResources = {
  __typename?: 'ArticleTextResources';
  block: Array<ArticleTextResourcesBlock>;
  hyperlink: Array<ArticleTextResourcesHyperlink>;
  inline: Array<ArticleTextResourcesInline>;
};

export type ArticleTextResourcesBlock = ResourceLink & {
  __typename?: 'ArticleTextResourcesBlock';
  sys: ResourceSys;
};

export type ArticleTextResourcesHyperlink = ResourceLink & {
  __typename?: 'ArticleTextResourcesHyperlink';
  sys: ResourceSys;
};

export type ArticleTextResourcesInline = ResourceLink & {
  __typename?: 'ArticleTextResourcesInline';
  sys: ResourceSys;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  __typename?: 'Asset';
  contentType: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  description: Maybe<Scalars['String']>;
  fileName: Maybe<Scalars['String']>;
  height: Maybe<Scalars['Int']>;
  linkedFrom: Maybe<AssetLinkingCollections>;
  size: Maybe<Scalars['Int']>;
  sys: Sys;
  title: Maybe<Scalars['String']>;
  url: Maybe<Scalars['String']>;
  width: Maybe<Scalars['Int']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetContentTypeArgs = {
  locale: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetDescriptionArgs = {
  locale: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetFileNameArgs = {
  locale: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetHeightArgs = {
  locale: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetSizeArgs = {
  locale: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetTitleArgs = {
  locale: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  locale: InputMaybe<Scalars['String']>;
  transform: InputMaybe<ImageTransformOptions>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetWidthArgs = {
  locale: InputMaybe<Scalars['String']>;
};

export type AssetCollection = {
  __typename?: 'AssetCollection';
  items: Array<Maybe<Asset>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type AssetFilter = {
  AND: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  OR: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  contentType: InputMaybe<Scalars['String']>;
  contentType_contains: InputMaybe<Scalars['String']>;
  contentType_exists: InputMaybe<Scalars['Boolean']>;
  contentType_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentType_not: InputMaybe<Scalars['String']>;
  contentType_not_contains: InputMaybe<Scalars['String']>;
  contentType_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  description: InputMaybe<Scalars['String']>;
  description_contains: InputMaybe<Scalars['String']>;
  description_exists: InputMaybe<Scalars['Boolean']>;
  description_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not: InputMaybe<Scalars['String']>;
  description_not_contains: InputMaybe<Scalars['String']>;
  description_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fileName: InputMaybe<Scalars['String']>;
  fileName_contains: InputMaybe<Scalars['String']>;
  fileName_exists: InputMaybe<Scalars['Boolean']>;
  fileName_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fileName_not: InputMaybe<Scalars['String']>;
  fileName_not_contains: InputMaybe<Scalars['String']>;
  fileName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  height: InputMaybe<Scalars['Int']>;
  height_exists: InputMaybe<Scalars['Boolean']>;
  height_gt: InputMaybe<Scalars['Int']>;
  height_gte: InputMaybe<Scalars['Int']>;
  height_in: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  height_lt: InputMaybe<Scalars['Int']>;
  height_lte: InputMaybe<Scalars['Int']>;
  height_not: InputMaybe<Scalars['Int']>;
  height_not_in: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  size: InputMaybe<Scalars['Int']>;
  size_exists: InputMaybe<Scalars['Boolean']>;
  size_gt: InputMaybe<Scalars['Int']>;
  size_gte: InputMaybe<Scalars['Int']>;
  size_in: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  size_lt: InputMaybe<Scalars['Int']>;
  size_lte: InputMaybe<Scalars['Int']>;
  size_not: InputMaybe<Scalars['Int']>;
  size_not_in: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sys: InputMaybe<SysFilter>;
  title: InputMaybe<Scalars['String']>;
  title_contains: InputMaybe<Scalars['String']>;
  title_exists: InputMaybe<Scalars['Boolean']>;
  title_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not: InputMaybe<Scalars['String']>;
  title_not_contains: InputMaybe<Scalars['String']>;
  title_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url: InputMaybe<Scalars['String']>;
  url_contains: InputMaybe<Scalars['String']>;
  url_exists: InputMaybe<Scalars['Boolean']>;
  url_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url_not: InputMaybe<Scalars['String']>;
  url_not_contains: InputMaybe<Scalars['String']>;
  url_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  width: InputMaybe<Scalars['Int']>;
  width_exists: InputMaybe<Scalars['Boolean']>;
  width_gt: InputMaybe<Scalars['Int']>;
  width_gte: InputMaybe<Scalars['Int']>;
  width_in: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  width_lt: InputMaybe<Scalars['Int']>;
  width_lte: InputMaybe<Scalars['Int']>;
  width_not: InputMaybe<Scalars['Int']>;
  width_not_in: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type AssetLinkingCollections = {
  __typename?: 'AssetLinkingCollections';
  articleCollection: Maybe<ArticleCollection>;
  entryCollection: Maybe<EntryCollection>;
  productCollection: Maybe<ProductCollection>;
  serviceCollection: Maybe<ServiceCollection>;
};


export type AssetLinkingCollectionsArticleCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale: InputMaybe<Scalars['String']>;
  preview: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale: InputMaybe<Scalars['String']>;
  preview: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsProductCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale: InputMaybe<Scalars['String']>;
  preview: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsServiceCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale: InputMaybe<Scalars['String']>;
  preview: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum AssetOrder {
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

export type ContentfulMetadata = {
  __typename?: 'ContentfulMetadata';
  concepts: Array<Maybe<TaxonomyConcept>>;
  tags: Array<Maybe<ContentfulTag>>;
};

export type ContentfulMetadataConceptsDescendantsFilter = {
  id_contains_all: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_contains_none: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_contains_some: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ContentfulMetadataConceptsFilter = {
  descendants: InputMaybe<ContentfulMetadataConceptsDescendantsFilter>;
  id_contains_all: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_contains_none: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_contains_some: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ContentfulMetadataFilter = {
  concepts: InputMaybe<ContentfulMetadataConceptsFilter>;
  concepts_exists: InputMaybe<Scalars['Boolean']>;
  tags: InputMaybe<ContentfulMetadataTagsFilter>;
  tags_exists: InputMaybe<Scalars['Boolean']>;
};

export type ContentfulMetadataTagsFilter = {
  id_contains_all: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_contains_none: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_contains_some: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *       Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
  __typename?: 'ContentfulTag';
  id: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
};

export type Entry = {
  contentfulMetadata: ContentfulMetadata;
  sys: Sys;
};

export type EntryCollection = {
  __typename?: 'EntryCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type EntryFilter = {
  AND: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  OR: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  sys: InputMaybe<SysFilter>;
};

export enum EntryOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ImageFormat {
  Avif = 'AVIF',
  /** JPG image format. */
  Jpg = 'JPG',
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = 'JPG_PROGRESSIVE',
  /** PNG image format */
  Png = 'PNG',
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = 'PNG8',
  /** WebP image format. */
  Webp = 'WEBP'
}

export enum ImageResizeFocus {
  /** Focus the resizing on the bottom. */
  Bottom = 'BOTTOM',
  /** Focus the resizing on the bottom left. */
  BottomLeft = 'BOTTOM_LEFT',
  /** Focus the resizing on the bottom right. */
  BottomRight = 'BOTTOM_RIGHT',
  /** Focus the resizing on the center. */
  Center = 'CENTER',
  /** Focus the resizing on the largest face. */
  Face = 'FACE',
  /** Focus the resizing on the area containing all the faces. */
  Faces = 'FACES',
  /** Focus the resizing on the left. */
  Left = 'LEFT',
  /** Focus the resizing on the right. */
  Right = 'RIGHT',
  /** Focus the resizing on the top. */
  Top = 'TOP',
  /** Focus the resizing on the top left. */
  TopLeft = 'TOP_LEFT',
  /** Focus the resizing on the top right. */
  TopRight = 'TOP_RIGHT'
}

export enum ImageResizeStrategy {
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = 'CROP',
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = 'FILL',
  /** Resizes the image to fit into the specified dimensions. */
  Fit = 'FIT',
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = 'PAD',
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = 'SCALE',
  /** Creates a thumbnail from the image. */
  Thumb = 'THUMB'
}

export type ImageTransformOptions = {
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor: InputMaybe<Scalars['HexColor']>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius: InputMaybe<Scalars['Int']>;
  /** Desired image format. Defaults to the original image format. */
  format: InputMaybe<ImageFormat>;
  /** Desired height in pixels. Defaults to the original image height. */
  height: InputMaybe<Scalars['Dimension']>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality: InputMaybe<Scalars['Quality']>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus: InputMaybe<ImageResizeFocus>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy: InputMaybe<ImageResizeStrategy>;
  /** Desired width in pixels. Defaults to the original image width. */
  width: InputMaybe<Scalars['Dimension']>;
};

/** Продукт [See type definition](https://app.contentful.com/spaces/72hh1iccowpx/content_types/product) */
export type Product = Entry & _Node & {
  __typename?: 'Product';
  _id: Scalars['ID'];
  category: Maybe<ProductCategory>;
  contentfulMetadata: ContentfulMetadata;
  image: Maybe<Asset>;
  info: Maybe<Scalars['JSON']>;
  linkedFrom: Maybe<ProductLinkingCollections>;
  name: Maybe<Scalars['String']>;
  quantity: Maybe<Scalars['String']>;
  subcategory: Maybe<ProductSubcategory>;
  sys: Sys;
};


/** Продукт [See type definition](https://app.contentful.com/spaces/72hh1iccowpx/content_types/product) */
export type ProductCategoryArgs = {
  locale: InputMaybe<Scalars['String']>;
  preview: InputMaybe<Scalars['Boolean']>;
  where: InputMaybe<ProductCategoryFilter>;
};


/** Продукт [See type definition](https://app.contentful.com/spaces/72hh1iccowpx/content_types/product) */
export type ProductImageArgs = {
  locale: InputMaybe<Scalars['String']>;
  preview: InputMaybe<Scalars['Boolean']>;
};


/** Продукт [See type definition](https://app.contentful.com/spaces/72hh1iccowpx/content_types/product) */
export type ProductInfoArgs = {
  locale: InputMaybe<Scalars['String']>;
};


/** Продукт [See type definition](https://app.contentful.com/spaces/72hh1iccowpx/content_types/product) */
export type ProductLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Продукт [See type definition](https://app.contentful.com/spaces/72hh1iccowpx/content_types/product) */
export type ProductNameArgs = {
  locale: InputMaybe<Scalars['String']>;
};


/** Продукт [See type definition](https://app.contentful.com/spaces/72hh1iccowpx/content_types/product) */
export type ProductQuantityArgs = {
  locale: InputMaybe<Scalars['String']>;
};


/** Продукт [See type definition](https://app.contentful.com/spaces/72hh1iccowpx/content_types/product) */
export type ProductSubcategoryArgs = {
  locale: InputMaybe<Scalars['String']>;
  preview: InputMaybe<Scalars['Boolean']>;
  where: InputMaybe<ProductSubcategoryFilter>;
};

/** Категорія продукту [See type definition](https://app.contentful.com/spaces/72hh1iccowpx/content_types/productCategory) */
export type ProductCategory = Entry & _Node & {
  __typename?: 'ProductCategory';
  _id: Scalars['ID'];
  contentfulMetadata: ContentfulMetadata;
  linkedFrom: Maybe<ProductCategoryLinkingCollections>;
  name: Maybe<Scalars['String']>;
  order: Maybe<Scalars['Int']>;
  sys: Sys;
};


/** Категорія продукту [See type definition](https://app.contentful.com/spaces/72hh1iccowpx/content_types/productCategory) */
export type ProductCategoryLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Категорія продукту [See type definition](https://app.contentful.com/spaces/72hh1iccowpx/content_types/productCategory) */
export type ProductCategoryNameArgs = {
  locale: InputMaybe<Scalars['String']>;
};


/** Категорія продукту [See type definition](https://app.contentful.com/spaces/72hh1iccowpx/content_types/productCategory) */
export type ProductCategoryOrderArgs = {
  locale: InputMaybe<Scalars['String']>;
};

export type ProductCategoryCollection = {
  __typename?: 'ProductCategoryCollection';
  items: Array<Maybe<ProductCategory>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ProductCategoryFilter = {
  AND: InputMaybe<Array<InputMaybe<ProductCategoryFilter>>>;
  OR: InputMaybe<Array<InputMaybe<ProductCategoryFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  name: InputMaybe<Scalars['String']>;
  name_contains: InputMaybe<Scalars['String']>;
  name_exists: InputMaybe<Scalars['Boolean']>;
  name_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not: InputMaybe<Scalars['String']>;
  name_not_contains: InputMaybe<Scalars['String']>;
  name_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  order: InputMaybe<Scalars['Int']>;
  order_exists: InputMaybe<Scalars['Boolean']>;
  order_gt: InputMaybe<Scalars['Int']>;
  order_gte: InputMaybe<Scalars['Int']>;
  order_in: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  order_lt: InputMaybe<Scalars['Int']>;
  order_lte: InputMaybe<Scalars['Int']>;
  order_not: InputMaybe<Scalars['Int']>;
  order_not_in: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sys: InputMaybe<SysFilter>;
};

export type ProductCategoryLinkingCollections = {
  __typename?: 'ProductCategoryLinkingCollections';
  entryCollection: Maybe<EntryCollection>;
  productCollection: Maybe<ProductCollection>;
  productSubcategoryCollection: Maybe<ProductSubcategoryCollection>;
};


export type ProductCategoryLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale: InputMaybe<Scalars['String']>;
  preview: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ProductCategoryLinkingCollectionsProductCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale: InputMaybe<Scalars['String']>;
  order: InputMaybe<Array<InputMaybe<ProductCategoryLinkingCollectionsProductCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ProductCategoryLinkingCollectionsProductSubcategoryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale: InputMaybe<Scalars['String']>;
  order: InputMaybe<Array<InputMaybe<ProductCategoryLinkingCollectionsProductSubcategoryCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum ProductCategoryLinkingCollectionsProductCollectionOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  QuantityAsc = 'quantity_ASC',
  QuantityDesc = 'quantity_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ProductCategoryLinkingCollectionsProductSubcategoryCollectionOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ProductCategoryOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  OrderAsc = 'order_ASC',
  OrderDesc = 'order_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type ProductCollection = {
  __typename?: 'ProductCollection';
  items: Array<Maybe<Product>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ProductFilter = {
  AND: InputMaybe<Array<InputMaybe<ProductFilter>>>;
  OR: InputMaybe<Array<InputMaybe<ProductFilter>>>;
  category: InputMaybe<CfProductCategoryNestedFilter>;
  category_exists: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  image_exists: InputMaybe<Scalars['Boolean']>;
  info_exists: InputMaybe<Scalars['Boolean']>;
  name: InputMaybe<Scalars['String']>;
  name_contains: InputMaybe<Scalars['String']>;
  name_exists: InputMaybe<Scalars['Boolean']>;
  name_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not: InputMaybe<Scalars['String']>;
  name_not_contains: InputMaybe<Scalars['String']>;
  name_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  quantity: InputMaybe<Scalars['String']>;
  quantity_contains: InputMaybe<Scalars['String']>;
  quantity_exists: InputMaybe<Scalars['Boolean']>;
  quantity_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  quantity_not: InputMaybe<Scalars['String']>;
  quantity_not_contains: InputMaybe<Scalars['String']>;
  quantity_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  subcategory: InputMaybe<CfProductSubcategoryNestedFilter>;
  subcategory_exists: InputMaybe<Scalars['Boolean']>;
  sys: InputMaybe<SysFilter>;
};

export type ProductLinkingCollections = {
  __typename?: 'ProductLinkingCollections';
  entryCollection: Maybe<EntryCollection>;
};


export type ProductLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale: InputMaybe<Scalars['String']>;
  preview: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum ProductOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  QuantityAsc = 'quantity_ASC',
  QuantityDesc = 'quantity_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Підкатегорія продукту [See type definition](https://app.contentful.com/spaces/72hh1iccowpx/content_types/productSubcategory) */
export type ProductSubcategory = Entry & _Node & {
  __typename?: 'ProductSubcategory';
  _id: Scalars['ID'];
  category: Maybe<ProductCategory>;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom: Maybe<ProductSubcategoryLinkingCollections>;
  name: Maybe<Scalars['String']>;
  sys: Sys;
};


/** Підкатегорія продукту [See type definition](https://app.contentful.com/spaces/72hh1iccowpx/content_types/productSubcategory) */
export type ProductSubcategoryCategoryArgs = {
  locale: InputMaybe<Scalars['String']>;
  preview: InputMaybe<Scalars['Boolean']>;
  where: InputMaybe<ProductCategoryFilter>;
};


/** Підкатегорія продукту [See type definition](https://app.contentful.com/spaces/72hh1iccowpx/content_types/productSubcategory) */
export type ProductSubcategoryLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Підкатегорія продукту [See type definition](https://app.contentful.com/spaces/72hh1iccowpx/content_types/productSubcategory) */
export type ProductSubcategoryNameArgs = {
  locale: InputMaybe<Scalars['String']>;
};

export type ProductSubcategoryCollection = {
  __typename?: 'ProductSubcategoryCollection';
  items: Array<Maybe<ProductSubcategory>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ProductSubcategoryFilter = {
  AND: InputMaybe<Array<InputMaybe<ProductSubcategoryFilter>>>;
  OR: InputMaybe<Array<InputMaybe<ProductSubcategoryFilter>>>;
  category: InputMaybe<CfProductCategoryNestedFilter>;
  category_exists: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  name: InputMaybe<Scalars['String']>;
  name_contains: InputMaybe<Scalars['String']>;
  name_exists: InputMaybe<Scalars['Boolean']>;
  name_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not: InputMaybe<Scalars['String']>;
  name_not_contains: InputMaybe<Scalars['String']>;
  name_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys: InputMaybe<SysFilter>;
};

export type ProductSubcategoryLinkingCollections = {
  __typename?: 'ProductSubcategoryLinkingCollections';
  entryCollection: Maybe<EntryCollection>;
  productCollection: Maybe<ProductCollection>;
};


export type ProductSubcategoryLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale: InputMaybe<Scalars['String']>;
  preview: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ProductSubcategoryLinkingCollectionsProductCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale: InputMaybe<Scalars['String']>;
  order: InputMaybe<Array<InputMaybe<ProductSubcategoryLinkingCollectionsProductCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum ProductSubcategoryLinkingCollectionsProductCollectionOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  QuantityAsc = 'quantity_ASC',
  QuantityDesc = 'quantity_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ProductSubcategoryOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type Query = {
  __typename?: 'Query';
  _node: Maybe<_Node>;
  article: Maybe<Article>;
  articleCollection: Maybe<ArticleCollection>;
  asset: Maybe<Asset>;
  assetCollection: Maybe<AssetCollection>;
  entryCollection: Maybe<EntryCollection>;
  product: Maybe<Product>;
  productCategory: Maybe<ProductCategory>;
  productCategoryCollection: Maybe<ProductCategoryCollection>;
  productCollection: Maybe<ProductCollection>;
  productSubcategory: Maybe<ProductSubcategory>;
  productSubcategoryCollection: Maybe<ProductSubcategoryCollection>;
  service: Maybe<Service>;
  serviceCollection: Maybe<ServiceCollection>;
  youTubeVideo: Maybe<YouTubeVideo>;
  youTubeVideoCollection: Maybe<YouTubeVideoCollection>;
};


export type Query_NodeArgs = {
  id: Scalars['ID'];
  locale: InputMaybe<Scalars['String']>;
  preview: InputMaybe<Scalars['Boolean']>;
};


export type QueryArticleArgs = {
  id: Scalars['String'];
  locale: InputMaybe<Scalars['String']>;
  preview: InputMaybe<Scalars['Boolean']>;
};


export type QueryArticleCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale: InputMaybe<Scalars['String']>;
  order: InputMaybe<Array<InputMaybe<ArticleOrder>>>;
  preview: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where: InputMaybe<ArticleFilter>;
};


export type QueryAssetArgs = {
  id: Scalars['String'];
  locale: InputMaybe<Scalars['String']>;
  preview: InputMaybe<Scalars['Boolean']>;
};


export type QueryAssetCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale: InputMaybe<Scalars['String']>;
  order: InputMaybe<Array<InputMaybe<AssetOrder>>>;
  preview: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where: InputMaybe<AssetFilter>;
};


export type QueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale: InputMaybe<Scalars['String']>;
  order: InputMaybe<Array<InputMaybe<EntryOrder>>>;
  preview: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where: InputMaybe<EntryFilter>;
};


export type QueryProductArgs = {
  id: Scalars['String'];
  locale: InputMaybe<Scalars['String']>;
  preview: InputMaybe<Scalars['Boolean']>;
};


export type QueryProductCategoryArgs = {
  id: Scalars['String'];
  locale: InputMaybe<Scalars['String']>;
  preview: InputMaybe<Scalars['Boolean']>;
};


export type QueryProductCategoryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale: InputMaybe<Scalars['String']>;
  order: InputMaybe<Array<InputMaybe<ProductCategoryOrder>>>;
  preview: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where: InputMaybe<ProductCategoryFilter>;
};


export type QueryProductCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale: InputMaybe<Scalars['String']>;
  order: InputMaybe<Array<InputMaybe<ProductOrder>>>;
  preview: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where: InputMaybe<ProductFilter>;
};


export type QueryProductSubcategoryArgs = {
  id: Scalars['String'];
  locale: InputMaybe<Scalars['String']>;
  preview: InputMaybe<Scalars['Boolean']>;
};


export type QueryProductSubcategoryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale: InputMaybe<Scalars['String']>;
  order: InputMaybe<Array<InputMaybe<ProductSubcategoryOrder>>>;
  preview: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where: InputMaybe<ProductSubcategoryFilter>;
};


export type QueryServiceArgs = {
  id: Scalars['String'];
  locale: InputMaybe<Scalars['String']>;
  preview: InputMaybe<Scalars['Boolean']>;
};


export type QueryServiceCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale: InputMaybe<Scalars['String']>;
  order: InputMaybe<Array<InputMaybe<ServiceOrder>>>;
  preview: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where: InputMaybe<ServiceFilter>;
};


export type QueryYouTubeVideoArgs = {
  id: Scalars['String'];
  locale: InputMaybe<Scalars['String']>;
  preview: InputMaybe<Scalars['Boolean']>;
};


export type QueryYouTubeVideoCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale: InputMaybe<Scalars['String']>;
  order: InputMaybe<Array<InputMaybe<YouTubeVideoOrder>>>;
  preview: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where: InputMaybe<YouTubeVideoFilter>;
};

export type ResourceLink = {
  sys: ResourceSys;
};

export type ResourceSys = {
  __typename?: 'ResourceSys';
  linkType: Scalars['String'];
  urn: Scalars['String'];
};

/** Послуга [See type definition](https://app.contentful.com/spaces/72hh1iccowpx/content_types/service) */
export type Service = Entry & _Node & {
  __typename?: 'Service';
  _id: Scalars['ID'];
  bgImg: Maybe<Asset>;
  contentfulMetadata: ContentfulMetadata;
  description: Maybe<ServiceDescription>;
  icon: Maybe<Asset>;
  linkedFrom: Maybe<ServiceLinkingCollections>;
  slug: Maybe<Scalars['String']>;
  stages: Maybe<ServiceStages>;
  subTitle: Maybe<Scalars['String']>;
  sys: Sys;
  title: Maybe<Scalars['String']>;
};


/** Послуга [See type definition](https://app.contentful.com/spaces/72hh1iccowpx/content_types/service) */
export type ServiceBgImgArgs = {
  locale: InputMaybe<Scalars['String']>;
  preview: InputMaybe<Scalars['Boolean']>;
};


/** Послуга [See type definition](https://app.contentful.com/spaces/72hh1iccowpx/content_types/service) */
export type ServiceDescriptionArgs = {
  locale: InputMaybe<Scalars['String']>;
};


/** Послуга [See type definition](https://app.contentful.com/spaces/72hh1iccowpx/content_types/service) */
export type ServiceIconArgs = {
  locale: InputMaybe<Scalars['String']>;
  preview: InputMaybe<Scalars['Boolean']>;
};


/** Послуга [See type definition](https://app.contentful.com/spaces/72hh1iccowpx/content_types/service) */
export type ServiceLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Послуга [See type definition](https://app.contentful.com/spaces/72hh1iccowpx/content_types/service) */
export type ServiceSlugArgs = {
  locale: InputMaybe<Scalars['String']>;
};


/** Послуга [See type definition](https://app.contentful.com/spaces/72hh1iccowpx/content_types/service) */
export type ServiceStagesArgs = {
  locale: InputMaybe<Scalars['String']>;
};


/** Послуга [See type definition](https://app.contentful.com/spaces/72hh1iccowpx/content_types/service) */
export type ServiceSubTitleArgs = {
  locale: InputMaybe<Scalars['String']>;
};


/** Послуга [See type definition](https://app.contentful.com/spaces/72hh1iccowpx/content_types/service) */
export type ServiceTitleArgs = {
  locale: InputMaybe<Scalars['String']>;
};

export type ServiceCollection = {
  __typename?: 'ServiceCollection';
  items: Array<Maybe<Service>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ServiceDescription = {
  __typename?: 'ServiceDescription';
  json: Scalars['JSON'];
  links: ServiceDescriptionLinks;
};

export type ServiceDescriptionAssets = {
  __typename?: 'ServiceDescriptionAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type ServiceDescriptionEntries = {
  __typename?: 'ServiceDescriptionEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type ServiceDescriptionLinks = {
  __typename?: 'ServiceDescriptionLinks';
  assets: ServiceDescriptionAssets;
  entries: ServiceDescriptionEntries;
  resources: ServiceDescriptionResources;
};

export type ServiceDescriptionResources = {
  __typename?: 'ServiceDescriptionResources';
  block: Array<ServiceDescriptionResourcesBlock>;
  hyperlink: Array<ServiceDescriptionResourcesHyperlink>;
  inline: Array<ServiceDescriptionResourcesInline>;
};

export type ServiceDescriptionResourcesBlock = ResourceLink & {
  __typename?: 'ServiceDescriptionResourcesBlock';
  sys: ResourceSys;
};

export type ServiceDescriptionResourcesHyperlink = ResourceLink & {
  __typename?: 'ServiceDescriptionResourcesHyperlink';
  sys: ResourceSys;
};

export type ServiceDescriptionResourcesInline = ResourceLink & {
  __typename?: 'ServiceDescriptionResourcesInline';
  sys: ResourceSys;
};

export type ServiceFilter = {
  AND: InputMaybe<Array<InputMaybe<ServiceFilter>>>;
  OR: InputMaybe<Array<InputMaybe<ServiceFilter>>>;
  bgImg_exists: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  description_contains: InputMaybe<Scalars['String']>;
  description_exists: InputMaybe<Scalars['Boolean']>;
  description_not_contains: InputMaybe<Scalars['String']>;
  icon_exists: InputMaybe<Scalars['Boolean']>;
  slug: InputMaybe<Scalars['String']>;
  slug_contains: InputMaybe<Scalars['String']>;
  slug_exists: InputMaybe<Scalars['Boolean']>;
  slug_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug_not: InputMaybe<Scalars['String']>;
  slug_not_contains: InputMaybe<Scalars['String']>;
  slug_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  stages_contains: InputMaybe<Scalars['String']>;
  stages_exists: InputMaybe<Scalars['Boolean']>;
  stages_not_contains: InputMaybe<Scalars['String']>;
  subTitle: InputMaybe<Scalars['String']>;
  subTitle_contains: InputMaybe<Scalars['String']>;
  subTitle_exists: InputMaybe<Scalars['Boolean']>;
  subTitle_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  subTitle_not: InputMaybe<Scalars['String']>;
  subTitle_not_contains: InputMaybe<Scalars['String']>;
  subTitle_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys: InputMaybe<SysFilter>;
  title: InputMaybe<Scalars['String']>;
  title_contains: InputMaybe<Scalars['String']>;
  title_exists: InputMaybe<Scalars['Boolean']>;
  title_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not: InputMaybe<Scalars['String']>;
  title_not_contains: InputMaybe<Scalars['String']>;
  title_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ServiceLinkingCollections = {
  __typename?: 'ServiceLinkingCollections';
  entryCollection: Maybe<EntryCollection>;
};


export type ServiceLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale: InputMaybe<Scalars['String']>;
  preview: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum ServiceOrder {
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SubTitleAsc = 'subTitle_ASC',
  SubTitleDesc = 'subTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type ServiceStages = {
  __typename?: 'ServiceStages';
  json: Scalars['JSON'];
  links: ServiceStagesLinks;
};

export type ServiceStagesAssets = {
  __typename?: 'ServiceStagesAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type ServiceStagesEntries = {
  __typename?: 'ServiceStagesEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type ServiceStagesLinks = {
  __typename?: 'ServiceStagesLinks';
  assets: ServiceStagesAssets;
  entries: ServiceStagesEntries;
  resources: ServiceStagesResources;
};

export type ServiceStagesResources = {
  __typename?: 'ServiceStagesResources';
  block: Array<ServiceStagesResourcesBlock>;
  hyperlink: Array<ServiceStagesResourcesHyperlink>;
  inline: Array<ServiceStagesResourcesInline>;
};

export type ServiceStagesResourcesBlock = ResourceLink & {
  __typename?: 'ServiceStagesResourcesBlock';
  sys: ResourceSys;
};

export type ServiceStagesResourcesHyperlink = ResourceLink & {
  __typename?: 'ServiceStagesResourcesHyperlink';
  sys: ResourceSys;
};

export type ServiceStagesResourcesInline = ResourceLink & {
  __typename?: 'ServiceStagesResourcesInline';
  sys: ResourceSys;
};

export type Sys = {
  __typename?: 'Sys';
  environmentId: Scalars['String'];
  firstPublishedAt: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  /** The locale that was requested. */
  locale: Maybe<Scalars['String']>;
  publishedAt: Maybe<Scalars['DateTime']>;
  publishedVersion: Maybe<Scalars['Int']>;
  spaceId: Scalars['String'];
};

export type SysFilter = {
  firstPublishedAt: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_exists: InputMaybe<Scalars['Boolean']>;
  firstPublishedAt_gt: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_gte: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  firstPublishedAt_lt: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_lte: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_not: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  id: InputMaybe<Scalars['String']>;
  id_contains: InputMaybe<Scalars['String']>;
  id_exists: InputMaybe<Scalars['Boolean']>;
  id_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_not: InputMaybe<Scalars['String']>;
  id_not_contains: InputMaybe<Scalars['String']>;
  id_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publishedAt: InputMaybe<Scalars['DateTime']>;
  publishedAt_exists: InputMaybe<Scalars['Boolean']>;
  publishedAt_gt: InputMaybe<Scalars['DateTime']>;
  publishedAt_gte: InputMaybe<Scalars['DateTime']>;
  publishedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedAt_lt: InputMaybe<Scalars['DateTime']>;
  publishedAt_lte: InputMaybe<Scalars['DateTime']>;
  publishedAt_not: InputMaybe<Scalars['DateTime']>;
  publishedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedVersion: InputMaybe<Scalars['Float']>;
  publishedVersion_exists: InputMaybe<Scalars['Boolean']>;
  publishedVersion_gt: InputMaybe<Scalars['Float']>;
  publishedVersion_gte: InputMaybe<Scalars['Float']>;
  publishedVersion_in: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  publishedVersion_lt: InputMaybe<Scalars['Float']>;
  publishedVersion_lte: InputMaybe<Scalars['Float']>;
  publishedVersion_not: InputMaybe<Scalars['Float']>;
  publishedVersion_not_in: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *         Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-concepts
 */
export type TaxonomyConcept = {
  __typename?: 'TaxonomyConcept';
  id: Maybe<Scalars['String']>;
};

/** Дані для відео YouTube [See type definition](https://app.contentful.com/spaces/72hh1iccowpx/content_types/youTubeVideo) */
export type YouTubeVideo = Entry & _Node & {
  __typename?: 'YouTubeVideo';
  _id: Scalars['ID'];
  contentfulMetadata: ContentfulMetadata;
  id: Maybe<Scalars['String']>;
  linkedFrom: Maybe<YouTubeVideoLinkingCollections>;
  shareLink: Maybe<Scalars['String']>;
  sys: Sys;
  title: Maybe<Scalars['String']>;
};


/** Дані для відео YouTube [See type definition](https://app.contentful.com/spaces/72hh1iccowpx/content_types/youTubeVideo) */
export type YouTubeVideoIdArgs = {
  locale: InputMaybe<Scalars['String']>;
};


/** Дані для відео YouTube [See type definition](https://app.contentful.com/spaces/72hh1iccowpx/content_types/youTubeVideo) */
export type YouTubeVideoLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Дані для відео YouTube [See type definition](https://app.contentful.com/spaces/72hh1iccowpx/content_types/youTubeVideo) */
export type YouTubeVideoShareLinkArgs = {
  locale: InputMaybe<Scalars['String']>;
};


/** Дані для відео YouTube [See type definition](https://app.contentful.com/spaces/72hh1iccowpx/content_types/youTubeVideo) */
export type YouTubeVideoTitleArgs = {
  locale: InputMaybe<Scalars['String']>;
};

export type YouTubeVideoCollection = {
  __typename?: 'YouTubeVideoCollection';
  items: Array<Maybe<YouTubeVideo>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type YouTubeVideoFilter = {
  AND: InputMaybe<Array<InputMaybe<YouTubeVideoFilter>>>;
  OR: InputMaybe<Array<InputMaybe<YouTubeVideoFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  id: InputMaybe<Scalars['String']>;
  id_contains: InputMaybe<Scalars['String']>;
  id_exists: InputMaybe<Scalars['Boolean']>;
  id_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_not: InputMaybe<Scalars['String']>;
  id_not_contains: InputMaybe<Scalars['String']>;
  id_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  shareLink: InputMaybe<Scalars['String']>;
  shareLink_contains: InputMaybe<Scalars['String']>;
  shareLink_exists: InputMaybe<Scalars['Boolean']>;
  shareLink_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  shareLink_not: InputMaybe<Scalars['String']>;
  shareLink_not_contains: InputMaybe<Scalars['String']>;
  shareLink_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys: InputMaybe<SysFilter>;
  title: InputMaybe<Scalars['String']>;
  title_contains: InputMaybe<Scalars['String']>;
  title_exists: InputMaybe<Scalars['Boolean']>;
  title_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not: InputMaybe<Scalars['String']>;
  title_not_contains: InputMaybe<Scalars['String']>;
  title_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type YouTubeVideoLinkingCollections = {
  __typename?: 'YouTubeVideoLinkingCollections';
  entryCollection: Maybe<EntryCollection>;
};


export type YouTubeVideoLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale: InputMaybe<Scalars['String']>;
  preview: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum YouTubeVideoOrder {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  ShareLinkAsc = 'shareLink_ASC',
  ShareLinkDesc = 'shareLink_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type _Node = {
  _id: Scalars['ID'];
};

export type CfProductCategoryNestedFilter = {
  AND: InputMaybe<Array<InputMaybe<CfProductCategoryNestedFilter>>>;
  OR: InputMaybe<Array<InputMaybe<CfProductCategoryNestedFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  name: InputMaybe<Scalars['String']>;
  name_contains: InputMaybe<Scalars['String']>;
  name_exists: InputMaybe<Scalars['Boolean']>;
  name_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not: InputMaybe<Scalars['String']>;
  name_not_contains: InputMaybe<Scalars['String']>;
  name_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  order: InputMaybe<Scalars['Int']>;
  order_exists: InputMaybe<Scalars['Boolean']>;
  order_gt: InputMaybe<Scalars['Int']>;
  order_gte: InputMaybe<Scalars['Int']>;
  order_in: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  order_lt: InputMaybe<Scalars['Int']>;
  order_lte: InputMaybe<Scalars['Int']>;
  order_not: InputMaybe<Scalars['Int']>;
  order_not_in: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sys: InputMaybe<SysFilter>;
};

export type CfProductSubcategoryNestedFilter = {
  AND: InputMaybe<Array<InputMaybe<CfProductSubcategoryNestedFilter>>>;
  OR: InputMaybe<Array<InputMaybe<CfProductSubcategoryNestedFilter>>>;
  category_exists: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  name: InputMaybe<Scalars['String']>;
  name_contains: InputMaybe<Scalars['String']>;
  name_exists: InputMaybe<Scalars['Boolean']>;
  name_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not: InputMaybe<Scalars['String']>;
  name_not_contains: InputMaybe<Scalars['String']>;
  name_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys: InputMaybe<SysFilter>;
};

export type GetAllArticlesForSeoQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllArticlesForSeoQuery = { __typename?: 'Query', articleCollection: { __typename?: 'ArticleCollection', items: Array<{ __typename?: 'Article', slug: string, sys: { __typename?: 'Sys', publishedAt: any } }> } };

export type GetAllArticlesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllArticlesQuery = { __typename?: 'Query', articleCollection: { __typename?: 'ArticleCollection', total: number, items: Array<{ __typename?: 'Article', title: string, slug: string, date: any, description: string, titleEn: string, descriptionEn: string, image: { __typename?: 'Asset', url: string } }> } };

export type GetAllArticlesSlugsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllArticlesSlugsQuery = { __typename?: 'Query', articleCollection: { __typename?: 'ArticleCollection', items: Array<{ __typename?: 'Article', slug: string }> } };

export type GetArticleBySlugQueryVariables = Exact<{
  slug: InputMaybe<Scalars['String']>;
}>;


export type GetArticleBySlugQuery = { __typename?: 'Query', articleCollection: { __typename?: 'ArticleCollection', items: Array<{ __typename?: 'Article', title: string, slug: string, date: any, description: string, titleEn: string, descriptionEn: string, image: { __typename?: 'Asset', url: string }, text: { __typename?: 'ArticleText', json: any, links: { __typename?: 'ArticleTextLinks', entries: { __typename?: 'ArticleTextEntries', hyperlink: Array<{ __typename: 'Article', title: string, slug: string, sys: { __typename?: 'Sys', id: string } } | { __typename: 'Product', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ProductCategory', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ProductSubcategory', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Service', title: string, slug: string, sys: { __typename?: 'Sys', id: string } } | { __typename: 'YouTubeVideo', sys: { __typename?: 'Sys', id: string } }>, block: Array<{ __typename: 'Article', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Product', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ProductCategory', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ProductSubcategory', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Service', sys: { __typename?: 'Sys', id: string } } | { __typename: 'YouTubeVideo', title: string, id: string, shareLink: string, sys: { __typename?: 'Sys', id: string } }> }, assets: { __typename?: 'ArticleTextAssets', block: Array<{ __typename?: 'Asset', contentType: string, title: string, url: string, width: number, height: number, sys: { __typename?: 'Sys', id: string } }> } } }, textEn: { __typename?: 'ArticleText', json: any, links: { __typename?: 'ArticleTextLinks', entries: { __typename?: 'ArticleTextEntries', hyperlink: Array<{ __typename: 'Article', title: string, slug: string, sys: { __typename?: 'Sys', id: string } } | { __typename: 'Product', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ProductCategory', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ProductSubcategory', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Service', title: string, slug: string, sys: { __typename?: 'Sys', id: string } } | { __typename: 'YouTubeVideo', sys: { __typename?: 'Sys', id: string } }>, block: Array<{ __typename: 'Article', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Product', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ProductCategory', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ProductSubcategory', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Service', sys: { __typename?: 'Sys', id: string } } | { __typename: 'YouTubeVideo', title: string, id: string, shareLink: string, sys: { __typename?: 'Sys', id: string } }> }, assets: { __typename?: 'ArticleTextAssets', block: Array<{ __typename?: 'Asset', contentType: string, title: string, url: string, width: number, height: number, sys: { __typename?: 'Sys', id: string } }> } } } }> } };

export type GetProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProductsQuery = { __typename?: 'Query', categoriesList: { __typename?: 'ProductCategoryCollection', items: Array<{ __typename?: 'ProductCategory', name: string, order: number, nameEn: string }> }, subCategoriesList: { __typename?: 'ProductSubcategoryCollection', items: Array<{ __typename?: 'ProductSubcategory', name: string, nameEn: string, category: { __typename?: 'ProductCategory', name: string } }> }, categories: { __typename?: 'ProductCategoryCollection', items: Array<{ __typename?: 'ProductCategory', name: string, order: number, linkedFrom: { __typename?: 'ProductCategoryLinkingCollections', productSubcategoryCollection: { __typename?: 'ProductSubcategoryCollection', items: Array<{ __typename?: 'ProductSubcategory', name: string }> } } }> }, products: { __typename?: 'ProductCollection', items: Array<{ __typename?: 'Product', name: string, quantity: string, info: any, nameEn: string, quantityEn: string, infoEn: any, image: { __typename?: 'Asset', url: string }, category: { __typename?: 'ProductCategory', name: string }, subcategory: { __typename?: 'ProductSubcategory', name: string } }> } };

export type GetAllServicesForSeoQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllServicesForSeoQuery = { __typename?: 'Query', serviceCollection: { __typename?: 'ServiceCollection', items: Array<{ __typename?: 'Service', slug: string, sys: { __typename?: 'Sys', publishedAt: any } }> } };

export type GetAllServicesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllServicesQuery = { __typename?: 'Query', serviceCollection: { __typename?: 'ServiceCollection', items: Array<{ __typename?: 'Service', title: string, slug: string, titleEn: string, icon: { __typename?: 'Asset', url: string, width: number, height: number } }> } };

export type GetAllServicesSlugsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllServicesSlugsQuery = { __typename?: 'Query', serviceCollection: { __typename?: 'ServiceCollection', items: Array<{ __typename?: 'Service', slug: string }> } };

export type GeServiceBySlugQueryVariables = Exact<{
  slug: InputMaybe<Scalars['String']>;
}>;


export type GeServiceBySlugQuery = { __typename?: 'Query', serviceCollection: { __typename?: 'ServiceCollection', items: Array<{ __typename?: 'Service', title: string, subTitle: string, titleEn: string, subTitleEn: string, description: { __typename?: 'ServiceDescription', json: any, links: { __typename?: 'ServiceDescriptionLinks', entries: { __typename?: 'ServiceDescriptionEntries', hyperlink: Array<{ __typename: 'Article', title: string, slug: string, sys: { __typename?: 'Sys', id: string } } | { __typename: 'Product', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ProductCategory', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ProductSubcategory', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Service', title: string, slug: string, sys: { __typename?: 'Sys', id: string } } | { __typename: 'YouTubeVideo', sys: { __typename?: 'Sys', id: string } }>, block: Array<{ __typename: 'Article', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Product', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ProductCategory', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ProductSubcategory', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Service', sys: { __typename?: 'Sys', id: string } } | { __typename: 'YouTubeVideo', title: string, id: string, shareLink: string, sys: { __typename?: 'Sys', id: string } }> }, assets: { __typename?: 'ServiceDescriptionAssets', block: Array<{ __typename?: 'Asset', contentType: string, title: string, url: string, width: number, height: number, sys: { __typename?: 'Sys', id: string } }> } } }, descriptionEn: { __typename?: 'ServiceDescription', json: any, links: { __typename?: 'ServiceDescriptionLinks', entries: { __typename?: 'ServiceDescriptionEntries', hyperlink: Array<{ __typename: 'Article', title: string, slug: string, sys: { __typename?: 'Sys', id: string } } | { __typename: 'Product', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ProductCategory', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ProductSubcategory', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Service', title: string, slug: string, sys: { __typename?: 'Sys', id: string } } | { __typename: 'YouTubeVideo', sys: { __typename?: 'Sys', id: string } }>, block: Array<{ __typename: 'Article', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Product', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ProductCategory', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ProductSubcategory', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Service', sys: { __typename?: 'Sys', id: string } } | { __typename: 'YouTubeVideo', title: string, id: string, shareLink: string, sys: { __typename?: 'Sys', id: string } }> }, assets: { __typename?: 'ServiceDescriptionAssets', block: Array<{ __typename?: 'Asset', contentType: string, title: string, url: string, width: number, height: number, sys: { __typename?: 'Sys', id: string } }> } } }, bgImg: { __typename?: 'Asset', url: string }, stages: { __typename?: 'ServiceStages', json: any }, stagesEn: { __typename?: 'ServiceStages', json: any } }> } };
