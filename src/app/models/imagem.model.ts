export class Imagem {
  public id: number;
  public in_mural: boolean = false;
  public width: number;
  public height: number;
  public url: string;
  public photographer: string;
  public photographer_url: string;
  public photographer_id: number;
  public src: SRC;
}

class SRC {
  public original: string;
  public large2x: string;
  public large: string;
  public medium: string;
  public small: string;
  public portrait: string;
  public landscape: string;
  public tiny: string;
}
