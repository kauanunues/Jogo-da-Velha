import React from 'react'
import { TouchableOpacity } from 'react-native'
import { EnTypo } from '@expo/vector-icons'

export default function figura() {
  return (
    <TouchableOpacity>
      <EnTypo name ="circle" size={100} color="#000"/>
    </TouchableOpacity>
  )
}
