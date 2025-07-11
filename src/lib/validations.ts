import { z } from 'zod'

// Validación para formulario de contacto
export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'El nombre debe tener al menos 2 caracteres')
    .max(100, 'El nombre no puede exceder 100 caracteres')
    .trim(),
  email: z
    .string()
    .email('Por favor ingresa un email válido')
    .max(255, 'El email no puede exceder 255 caracteres')
    .toLowerCase()
    .trim(),
  subject: z
    .string()
    .min(5, 'El asunto debe tener al menos 5 caracteres')
    .max(200, 'El asunto no puede exceder 200 caracteres')
    .trim(),
  message: z
    .string()
    .min(10, 'El mensaje debe tener al menos 10 caracteres')
    .max(2000, 'El mensaje no puede exceder 2000 caracteres')
    .trim(),
})

// Validación para crear/editar proyectos
export const projectSchema = z.object({
  title: z
    .string()
    .min(3, 'El título debe tener al menos 3 caracteres')
    .max(200, 'El título no puede exceder 200 caracteres')
    .trim(),
  description: z
    .string()
    .min(10, 'La descripción debe tener al menos 10 caracteres')
    .max(500, 'La descripción no puede exceder 500 caracteres')
    .trim(),
  longDescription: z
    .string()
    .min(20, 'La descripción larga debe tener al menos 20 caracteres')
    .max(5000, 'La descripción larga no puede exceder 5000 caracteres')
    .trim()
    .optional(),
  categoryId: z
    .number()
    .int()
    .positive('Debe seleccionar una categoría válida'),
  status: z
    .enum(['draft', 'published', 'archived'])
    .default('draft'),
  priority: z
    .number()
    .int()
    .min(0)
    .max(10)
    .default(0),
  featured: z
    .boolean()
    .default(false),
  slug: z
    .string()
    .min(3, 'El slug debe tener al menos 3 caracteres')
    .max(200, 'El slug no puede exceder 200 caracteres')
    .regex(/^[a-z0-9-]+$/, 'El slug solo puede contener letras minúsculas, números y guiones')
    .trim(),
})

// Validación para crear/editar posts del blog
export const blogPostSchema = z.object({
  title: z
    .string()
    .min(5, 'El título debe tener al menos 5 caracteres')
    .max(200, 'El título no puede exceder 200 caracteres')
    .trim(),
  content: z
    .string()
    .min(50, 'El contenido debe tener al menos 50 caracteres')
    .max(50000, 'El contenido no puede exceder 50000 caracteres')
    .trim(),
  excerpt: z
    .string()
    .min(20, 'El excerpt debe tener al menos 20 caracteres')
    .max(300, 'El excerpt no puede exceder 300 caracteres')
    .trim()
    .optional(),
  slug: z
    .string()
    .min(3, 'El slug debe tener al menos 3 caracteres')
    .max(200, 'El slug no puede exceder 200 caracteres')
    .regex(/^[a-z0-9-]+$/, 'El slug solo puede contener letras minúsculas, números y guiones')
    .trim(),
  categoryId: z
    .number()
    .int()
    .positive('Debe seleccionar una categoría válida')
    .optional(),
  status: z
    .enum(['draft', 'published', 'archived'])
    .default('draft'),
  seoTitle: z
    .string()
    .max(60, 'El título SEO no puede exceder 60 caracteres')
    .trim()
    .optional(),
  seoDescription: z
    .string()
    .max(160, 'La descripción SEO no puede exceder 160 caracteres')
    .trim()
    .optional(),
  featuredImage: z
    .string()
    .url('Debe ser una URL válida')
    .optional(),
})

// Validación para parámetros de paginación
export const paginationSchema = z.object({
  page: z
    .number()
    .int()
    .min(1, 'La página debe ser mayor a 0')
    .default(1),
  limit: z
    .number()
    .int()
    .min(1, 'El límite debe ser mayor a 0')
    .max(100, 'El límite no puede exceder 100')
    .default(10),
  orderBy: z
    .string()
    .max(50, 'El campo de ordenamiento no puede exceder 50 caracteres')
    .optional(),
  orderDirection: z
    .enum(['asc', 'desc'])
    .default('desc'),
})

// Validación para filtros de proyectos
export const projectFiltersSchema = z.object({
  category: z
    .string()
    .max(100, 'La categoría no puede exceder 100 caracteres')
    .optional(),
  technology: z
    .string()
    .max(100, 'La tecnología no puede exceder 100 caracteres')
    .optional(),
  featured: z
    .boolean()
    .optional(),
  status: z
    .enum(['draft', 'published', 'archived'])
    .optional(),
})

// Validación para filtros de blog
export const blogFiltersSchema = z.object({
  category: z
    .string()
    .max(100, 'La categoría no puede exceder 100 caracteres')
    .optional(),
  tag: z
    .string()
    .max(100, 'La etiqueta no puede exceder 100 caracteres')
    .optional(),
  status: z
    .enum(['draft', 'published', 'archived'])
    .optional(),
  featured: z
    .boolean()
    .optional(),
})

// Tipos derivados de los esquemas
export type ContactFormData = z.infer<typeof contactFormSchema>
export type ProjectData = z.infer<typeof projectSchema>
export type BlogPostData = z.infer<typeof blogPostSchema>
export type PaginationParams = z.infer<typeof paginationSchema>
export type ProjectFilters = z.infer<typeof projectFiltersSchema>
export type BlogFilters = z.infer<typeof blogFiltersSchema> 