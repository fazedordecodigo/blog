interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'PyFlunt',
    description: `Implementação de Domain Notifications em Python inspirado no Flunt do C#.`,
    imgSrc: '/static/images/flunt.jpeg',
    href: 'https://www.github.com/fazedordecodigo/pyflunt',
  },
]

export default projectsData
