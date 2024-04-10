import { Controller, ControllerProvider } from '@sdk-ts/controller';

export type I18NLabel_ = {
  [key: string]: string | string[] | ((p1: any) => string) | ((p1: any, p2: any) => string | number);
}
export type I18nLanguage = 'en' | 'de' | 'es' | 'fr' | 'it' | 'pt' | 'ru' | 'th' | 'tl' | 'zh';


export class I18nItem<T> {
  public en_: T;
  public get en(): T {
    return this.en_;
  }

  public de_?: T;
  public get de(): T {
    return this.de_ ? this.de_ : this.en;
  }

  public es_?: T;
  public get es(): T {
    return this.es_ ? this.es_ : this.en;
  }

  public fr_?: T;
  public get fr(): T {
    return this.fr_ ? this.fr_ : this.en;
  }

  public it_?: T;
  public get it(): T {
    return this.it_ ? this.it_ : this.en;
  }

  public pt_?: T;
  public get pt(): T {
    return this.pt_ ? this.pt_ : this.en;
  }

  public ru_?: T;
  public get ru(): T {
    return this.ru_ ? this.ru_ : this.en;
  }

  public th_?: T;
  public get th(): T {
    return this.th_ ? this.th_ : this.en;
  }

  public tl_?: T;
  public get tl(): T {
    return this.tl_ ? this.tl_ : this.en;
  }

  public zh_?: T;
  public get zh(): T {
    return this.zh_ ? this.zh_ : this.en;
  }
}


export abstract class AbstractCoreI18n<T extends I18NLabel_> {
  public static i18nLanguages: I18nLanguage[] = ['en', 'de', 'es', 'fr', 'it', 'pt', 'ru', 'th', 'tl', 'zh'];

  protected en_: T;
  protected abstract get en(): T;
  public get languEN(): T {
    return this.en_;
  }


  protected de_: T;
  protected get de(): T {
    return undefined;
  }
  public get languDE(): T {
    return this.de_;
  }

  protected es_: T;
  protected get es(): T {
    return undefined;
  }
  public get languES(): T {
    return this.es_;
  }

  protected fr_: T;
  protected get fr(): T {
    return undefined;
  }
  public get languFR(): T {
    return this.fr_;
  }

  protected it_: T;
  protected get it(): T {
    return undefined;
  }
  public get languIT(): T {
    return this.it_;
  }

  protected pt_: T;
  protected get pt(): T {
    return undefined;
  }
  public get languPT(): T {
    return this.pt_;
  }

  protected ru_: T;
  protected get ru(): T {
    return undefined;
  }
  public get languRU(): T {
    return this.ru_;
  }

  protected th_: T;
  protected get th(): T {
    return undefined;
  }
  public get languTH(): T {
    return this.th_;
  }

  protected tl_: T;
  protected get tl(): T {
    return undefined;
  }
  public get languTL(): T {
    return this.tl_;
  }

  protected zh_: T;
  protected get zh(): T {
    return undefined;
  }
  public get languZH(): T {
    return this.zh_;
  }


  public labels: T;
  public castLabels: any;
}


export class I18nListAbstractEntry<T> extends I18nItem<T> {
  public code: string;
}


export class I18nListEntry extends I18nListAbstractEntry<string> {
}

export abstract class I18n<T extends I18NLabel_> extends AbstractCoreI18n<T> {

  private controller: Controller;

  constructor() {
    super();
    this.controller = ControllerProvider.instance;
  }

  protected loadI18n(): void {
    this.controller.i18nRegisterSource(this);
  }
}
