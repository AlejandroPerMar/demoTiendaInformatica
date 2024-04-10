import { I18n } from '@i18n/i18n';

export class I18nApp extends I18n<{
  COPYRIGHT: string;
}> {

  public constructor() {
    super();
    this.loadI18n();
  }

  protected get en() {
    return {
      COPYRIGHT: '© 2021 All Rights Reserved By Template',
    };
  }

  protected override get es() {
    return {
      COPYRIGHT: '© 2021 Todos los derechos reservados por Template',
    };
  }

  protected override get fr() {
    return {
      COPYRIGHT: '© 2021 Tous droits réservés par Template',
    };
  }

  protected override get de() {
    return {
      COPYRIGHT: '© 2021 Alle Rechte vorbehalten von Template',
    };
  }

  protected override get it() {
    return {
      COPYRIGHT: '© 2021 Tutti i diritti riservati da Template',
    };
  }
}