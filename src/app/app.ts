import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Jogo {

  titulo: string;
  genero: string;
  nota: number;
  platinado: boolean;

}

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {

  titulo: string = 'Galeria de Jogos GK';

  // jogos já cadastrados
  jogos: Jogo[] = [
    { titulo: 'Dark Souls Remastered', genero: 'Soulslike', nota: 10, platinado: true},
    { titulo: 'Hollow Knight', genero: 'Metroidvania', nota: 9, platinado: false},
    { titulo: 'Stardew Valley', genero: 'Simulação', nota: 9, platinado: false},
    { titulo: 'Elden Ring', genero: 'RPG', nota: 10, platinado: true},
    { titulo: 'GTA 5', genero:'Ação', nota: 10, platinado: false}
  ];

    novoTitulo: string = '';
    novoGenero: string = '';
    novaNota: number | null = null;

    textoBusca: string = '';

    InputEValido(): boolean {
      if (this.novaNota == null)
        return false;

      if (this.novoTitulo.trim()
       && this.novoGenero.trim()
       && this.novaNota !== null
       && this.novaNota >= 0
       && this.novaNota <= 10)
        return true;
      return false;
    }

    jogosFiltrados(): Jogo[] {
      if (!this.textoBusca.trim()){
        return this.jogos;
      }
      return this.jogos.filter(jogo =>
        jogo.titulo.toLowerCase().includes(this.textoBusca.toLowerCase())
      );
    }

    //adicionar novo jogo
    adicionarJogo(){
      if (this.InputEValido()) {
        this.jogos.push({
          titulo: this.novoTitulo,
          genero: this.novoGenero,
          nota: Number(this.novaNota),
          platinado: false
        });

        this.novoTitulo= '';
        this.novoGenero= '';
        this.novaNota = null;
      }
    }

    removerJogo(jogo: Jogo) {
      const index = this.jogos.indexOf(jogo);

      this.jogos.splice(index,1);
    }

    alternarJogado(jogo: Jogo) {
      jogo.platinado= !jogo.platinado;
    }

}
