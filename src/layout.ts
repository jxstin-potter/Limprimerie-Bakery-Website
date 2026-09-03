import type { Route } from './router'
import { createHeader } from './components/header'
import { createFooter } from './components/footer'

export function createAppShell(route: Route, mainContent: HTMLElement): HTMLElement {
  const shell = document.createElement('div')
  shell.className = 'appShell'

  const header = createHeader(route)
  const footer = createFooter()

  const main = document.createElement('main')
  main.id = 'main'
  main.className = 'main'
  main.tabIndex = -1
  main.appendChild(mainContent)

  // Hash-routing means we can't use normal fragment links (e.g. "#main") without breaking routes.
  // Use a button that programmatically moves focus to the main landmark.
  const skip = document.createElement('button')
  skip.className = 'skipLink'
  skip.type = 'button'
  skip.textContent = 'Skip to content'
  skip.addEventListener('click', () => {
    main.focus()
  })

  shell.append(skip, header, main, footer)
  return shell
}

