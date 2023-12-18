import type { Schema, Attribute } from '@strapi/strapi';

export interface RepertoireRepertoireSingle extends Schema.Component {
  collectionName: 'components_repertoire_repertoire_singles';
  info: {
    displayName: 'repertoire_single';
    icon: 'layer';
    description: '';
  };
  attributes: {
    song_1: Attribute.String & Attribute.Required;
  };
}

export interface RepertoireRepertoire extends Schema.Component {
  collectionName: 'components_repertoire_repertoires';
  info: {
    displayName: 'repertoire';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    song_1: Attribute.Text;
    song_2: Attribute.Text;
    song_3: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'repertoire.repertoire-single': RepertoireRepertoireSingle;
      'repertoire.repertoire': RepertoireRepertoire;
    }
  }
}
