import React, { Component } from 'react'
import s from './Pokecard.module.css'

const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/'

let padToThree = number => (number <= 999 ? `00${number}`.slice(-3) : number)
class Pokecard extends Component {
  render() {
    let imgSrc = `${POKE_API}${padToThree(this.props.id)}.png`
    return (
      <div className={s.pokecard}>
        <h1 className={s.pokecardTitle}>{this.props.name}</h1>
        <img src={imgSrc} alt={this.props.name} />
        <div className={s.pokecardData}>Type: {this.props.type}</div>
        <div className={s.pokecardData}>Exp: {this.props.exp}</div>
      </div>
    )
  }
}

export default Pokecard
