import { CMS_NAME } from '../lib/constants'

const Intro = () => {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight oniblue md:pr-8">
        Onigiri Hardcore
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
         Summonando notícias desde 2013
      </h4>
    </section>
  )
}

export default Intro
