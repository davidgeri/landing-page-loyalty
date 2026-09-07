import { CalendarDays, Crown, Share2,  } from '@lucide/vue'
import type { Country } from '../type/main'

export const DataRequestDemo = {
  heading: 'Request Demo',
  title: {
    titleFirst: 'Kembangkan bisnis hotel Anda dengan produk add-ons',
    titleSecond: 'Cakrasoft'
  },
  desk: 'Booking Engine, Channel Manager, dan Cakra Loyalty solusi terintegrasi untuk operasional hotel yang lebih efisien.'
}

export const ArticleReqDemo = [
  { title: 'Booking Engine', desk: 'Reservasi langsung tanpa komisi OTA', icon: CalendarDays },
  { title: 'Channel Manager', desk: 'Integrasi dengan OTA dan GDS', icon: Share2 },
  { title: 'Cakra Loyalty', desk: 'Tingkatkan loyalitas dan retensi tamu', icon: Crown }
]

export const countriesReqDemo: Country[] = [
  { name: 'Amerika Serikat', code: 'US', dial: '+1', flag: 'https://flagcdn.com/w40/us.png' },
  { name: 'Australia', code: 'AU', dial: '+61', flag: 'https://flagcdn.com/w40/au.png' },
  { name: 'Indonesia', code: 'ID', dial: '+62', flag: 'https://flagcdn.com/w40/id.png' },
  { name: 'Jepang', code: 'JP', dial: '+81', flag: 'https://flagcdn.com/w40/jp.png' },
  { name: 'Singapura', code: 'SG', dial: '+65', flag: 'https://flagcdn.com/w40/sg.png' },
  { name: 'Malaysia', code: 'MY', dial: '+60', flag: 'https://flagcdn.com/w40/my.png' },
  { name: 'China', code: 'CN', dial: '+86', flag: 'https://flagcdn.com/w40/cn.png' },
]

export const SelectPt = {
  overlay: { class: '!z-[9999] !mt-1 !overflow-hidden !rounded-lg !border !border-slate-200 !bg-white !opacity-100 !shadow-xl' },
  listContainer: { class: '!max-h-[220px] !overflow-y-auto !bg-white' },
  list: { class: 'm-0 list-none p-1' },
  option: { class: 'cursor-pointer rounded-md px-2 py-2 text-base text-slate-700 hover:bg-blue-50' },
  dropdown: { class: '!w-8' },
  dropdownIcon: { class: '!h-3 !w-3' }
}
export  const PhoneSelectPt = {
  ...SelectPt,
  overlay: { class: '!z-[9999] !mt-1 !w-56 !overflow-hidden !rounded-lg !border !border-slate-200 !bg-white !opacity-100 !shadow-xl' },
  label: { class: '!px-5 !py-0 !text-xs' },
  dropdown: { class: '!w-6' },
  dropdownIcon: { class: '!h-3 !w-3' }
}