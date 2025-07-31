declare global {
  interface Window {
    scrollTimeout: NodeJS.Timeout | undefined
  }
}

// Tipos básicos del proyecto
export interface Project {
  id: number
  title: string
  description: string
  longDescription?: string
  categoryId: number
  status: string
  priority: number
  featured: boolean
  slug: string
  createdAt: Date
  updatedAt: Date
  category?: Category
  technologies?: ProjectTechnology[]
  images?: ProjectImage[]
  links?: ProjectLink[]
}

export interface Category {
  id: number
  name: string
  slug: string
  description?: string
  displayOrder: number
  createdAt: Date
  updatedAt: Date
}

export interface Technology {
  id: number
  name: string
  category: string
  iconUrl?: string
  color?: string
  displayOrder: number
  createdAt: Date
  updatedAt: Date
}

export interface ProjectTechnology {
  projectId: number
  technologyId: number
  proficiencyLevel?: string
  technology?: Technology
}

export interface ProjectImage {
  id: number
  projectId: number
  imageUrl: string
  altText?: string
  displayOrder: number
  isFeatured: boolean
}

export interface ProjectLink {
  id: number
  projectId: number
  linkType: string
  url: string
  label: string
}

export interface BlogPost {
  id: number
  title: string
  content: string
  excerpt?: string
  slug: string
  categoryId?: number
  status: string
  seoTitle?: string
  seoDescription?: string
  featuredImage?: string
  publishedAt?: Date
  createdAt: Date
  updatedAt: Date
  category?: Category
  tags?: BlogPostTag[]
}

export interface BlogTag {
  id: number
  name: string
  slug: string
  createdAt: Date
  updatedAt: Date
}

export interface BlogPostTag {
  postId: number
  tagId: number
  tag?: BlogTag
}

export interface Contact {
  id: number
  name: string
  email: string
  subject: string
  message: string
  status: string
  ipAddress?: string
  userAgent?: string
  createdAt: Date
}

// Tipos para formularios
export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

// Tipos para respuestas de API
export interface ApiResponse<T = unknown> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

// Tipos para paginación
export interface PaginationParams {
  page: number
  limit: number
  orderBy?: string
  orderDirection?: 'asc' | 'desc'
}

export interface PaginatedResponse<T> {
  data: T[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
    hasNext: boolean
    hasPrev: boolean
  }
}

// Tipos para filtros
export interface ProjectFilters {
  category?: string
  technology?: string
  featured?: boolean
  status?: string
}

export interface BlogFilters {
  category?: string
  tag?: string
  status?: string
  featured?: boolean
}

// Interface para trabajos/experiencia
export interface Job {
  title: string
  period: string
  company: string
  description: string
  technologies: string[]
}

// Interface simple para proyectos (para uso en componentes)
export interface SimpleProject {
  title: string
  description: string
  technologies: string[]
}
