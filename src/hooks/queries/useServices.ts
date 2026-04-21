import { useQuery } from '@tanstack/react-query'
import { servicesApi, mockServices } from '../../api/services'

export const useServices = () => {
  return useQuery({
    queryKey: ['services'],
    queryFn: async () => {
      // For now, using mock data. Replace with actual API call when backend is ready
      // return servicesApi.getAll()
      return new Promise((resolve) => {
        setTimeout(() => resolve(mockServices), 500)
      })
    },
  })
}

export const useServiceById = (id: string) => {
  return useQuery({
    queryKey: ['service', id],
    queryFn: () => servicesApi.getById(id),
    enabled: !!id,
  })
}

export const useServicesByCategory = (category: string) => {
  return useQuery({
    queryKey: ['services', 'category', category],
    queryFn: () => servicesApi.getByCategory(category),
    enabled: !!category,
  })
}