// composables/useYandexMaps.js
export const useYandexMaps = () => {
  const isLoaded = ref(false)
  const isLoading = ref(false)
  const error = ref(null)

  const loadYandexMaps = async (apiKey = 'YOUR_API_KEY') => {
    if (window.ymaps) {
      isLoaded.value = true
      return window.ymaps
    }

    if (isLoading.value) {
      return new Promise((resolve) => {
        const checkLoaded = () => {
          if (isLoaded.value) {
            resolve(window.ymaps)
          } else {
            setTimeout(checkLoaded, 100)
          }
        }
        checkLoaded()
      })
    }

    isLoading.value = true
    error.value = null

    return new Promise((resolve, reject) => {
      const script = document.createElement('script')
      script.src = `https://api-maps.yandex.ru/2.1/?apikey=${apiKey}&lang=uz_UZ`
      script.async = true

      script.onload = () => {
        isLoading.value = false
        isLoaded.value = true
        resolve(window.ymaps)
      }

      script.onerror = () => {
        isLoading.value = false
        error.value = 'Yandex Maps API yuklanmadi'
        reject(new Error('Yandex Maps API yuklanmadi'))
      }

      document.head.appendChild(script)
    })
  }

  const createMap = async (containerId, options = {}) => {
    try {
      const ymaps = await loadYandexMaps()
      
      return new Promise((resolve) => {
        ymaps.ready(() => {
          const map = new ymaps.Map(containerId, {
            center: options.center || [ 40.396581, 71.779680],
            zoom: options.zoom || 17,
            ...options
          })
          resolve(map)
        })
      })
    } catch (err) {
      error.value = err.message
      throw err
    }
  }

  return {
    isLoaded: readonly(isLoaded),
    isLoading: readonly(isLoading),
    error: readonly(error),
    loadYandexMaps,
    createMap
  }
}