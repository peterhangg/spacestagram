export interface IAPOD {
  copyright?: string | null
  date: string
  explanation: string
  hdurl?: string | null
  media_type: string
  service_version: string
  title: string
  url: string
}

export interface INasaImageState {
  nasaImages: IAPOD[]
  loading: boolean
  error: boolean
}
