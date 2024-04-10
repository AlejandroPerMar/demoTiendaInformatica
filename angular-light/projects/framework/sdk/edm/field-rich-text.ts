import { AbstractEdmFieldRead, AbstractEdmFieldWrite } from './field';


export interface AbstractEdmFieldReadRichText extends AbstractEdmFieldRead<string, string> {
}

export interface RichTextCodeProvider {
  getCode(): string;
  isNullOrEmpty(): boolean;
  clear: () => void;
}
export interface AbstractEdmFieldWriteRichText extends AbstractEdmFieldWrite<string> {
  value: string;
  codeProvider: RichTextCodeProvider;
}
