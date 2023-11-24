import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Blee, BleeSentado } from '@/statics'
import style from './style.module.css'

const inter = Inter({ subsets: ['latin'] })

function ImageDemo() {
  return (
    <div className={`${inter.className} main`}>
      <h1 className={style['title']}>Demonstração do Componente Image</h1>
      <p>Imagem usando a tag img</p>
      <img src={Blee.src} className={style['image']} alt="" />
      <p>Imagem usando o componente Image</p>
      <Image src={Blee} className={style['image']} alt="" />
      <div className={style['separator']} />
      <Image src={BleeSentado} className={style['image']} alt="" />
    </div>
  )
}

export default ImageDemo
