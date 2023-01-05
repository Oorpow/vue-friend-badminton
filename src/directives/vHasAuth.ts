import type { Directive } from 'vue'

export const vHasAuth: Directive<HTMLElement, string> = (el, binding) => {
  if (!binding.value) {
    el.style.display = 'none'
  }
}
