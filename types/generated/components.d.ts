import type { Schema, Attribute } from '@strapi/strapi';

export interface ConfigSocialLink extends Schema.Component {
  collectionName: 'components_config_social_links';
  info: {
    displayName: 'SocialLink';
    icon: 'link';
  };
  attributes: {
    url: Attribute.String & Attribute.Required & Attribute.Unique;
    SocialImage: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'config.social-link': ConfigSocialLink;
    }
  }
}
