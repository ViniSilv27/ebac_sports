import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type FavoritoState = {
  itens: Produto[]
}

const initialState: FavoritoState = {
  itens: []
}

const favoritoSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    toggleFavorito: (state, action: PayloadAction<Produto>) => {
      const item = action.payload

      const existe = state.itens.find((produto) => produto.id === item.id)

      if (existe) {
        state.itens = state.itens.filter((p) => p.id !== item.id)
      } else {
        state.itens.push(item)
      }
    }
  }
})

export const { toggleFavorito } = favoritoSlice.actions
export default favoritoSlice.reducer
