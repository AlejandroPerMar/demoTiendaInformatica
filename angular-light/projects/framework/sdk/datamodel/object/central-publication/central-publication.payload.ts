import { I18nItem } from '@i18n/i18n';
import { EdmPayload } from '@sdk-datamodel-object/payload';

export type EdmPayloadCentralPublicationShared = {
  shared: boolean;
}

export type EdmPayloadCentralPublicationBasicData = {
  clientid: string;
  updatime: string;
  title: I18nItem<string>;
  content: I18nItem<string>;
  pictures: I18nItem<string[]>;
  videos_youtube: I18nItem<string[]>;
  external_links: string[];
  ref_author_name: string;
  ref_author_catchphrase: string;
  ref_author_avatar: string;
  ref_author_url: string;
  ref_post_url: string;
  ref_picture: string;
  original: boolean;
}

export type EdmPayloadCentralPublication = EdmPayload & {
  basic_data: EdmPayloadCentralPublicationBasicData,
  shared: EdmPayloadCentralPublicationShared,
}