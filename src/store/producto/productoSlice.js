import { createSlice } from '@reduxjs/toolkit';

export const productoSlice = createSlice({
    name: 'producto',
    initialState: {
        modalActivo: false,
        cargando: false,
        productoSeleccionado: {},
        productos:[],
    },
    reducers: {
        colocarProductos: (state, action ) => {
            state.productos = action.payload
        },
        seleccionarProducto:(state,action)=>{
            state.productoSeleccionado = action.payload
        },
        eliminarProducto:(state, action)=>{
            state.productos = state.productos.filter(
                producto => producto.id !== action.payload.id
            )
        },
        crearProducto:(state, {payload})=>{
            state.productos.push(payload)
            //state.productos = [...state.productos, payload]
        },
        actualizarProducto:(state, {payload})=>{
            state.productos = state.productos.map(
                producto=>(
                    producto.id === payload.id
                    ?{...producto, nombre: payload.nombre}
                    : producto    
                ))
        },
        modalToogle:(state)=>{
            state.modalActivo = !state.modalActivo
        },
        cargando:(state)=>{
            state.cargando = !state.cargando
        }
    }
});


// Action creators are generated for each case reducer function
export const { 
    colocarProductos, 
    seleccionarProducto,
    eliminarProducto,
    crearProducto,
    modalToogle,
    cargando,
    actualizarProducto,
} = productoSlice.actions;