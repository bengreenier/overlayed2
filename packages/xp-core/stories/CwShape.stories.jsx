import React from 'react'
import BaseShape from '../comp/cw_shape/Base'
import { EditingMale as EditingMaleShape } from '../comp/cw_shape/EditingMale'
import { EditingFemale as EditingFemaleShape } from '../comp/cw_shape/EditingFemale'
import { Animation as AnimationShape } from '../comp/cw_shape/Animation'
import { Chart as ChartShape } from '../comp/cw_shape/Chart'
import { Sand as SandShape } from '../comp/cw_shape/Sand'
import { Chef as ChefShape } from '../comp/cw_shape/Chef'

export default {
  title: 'CwShape',
  component: BaseShape,
}

export const Loading = () => <BaseShape />
export const EditingMale = () => <EditingMaleShape />
export const EditingFemale = () => <EditingFemaleShape />
export const Animation = () => <AnimationShape />
export const Chart = () => <ChartShape />
export const Sand = () => <SandShape />
export const Chef = () => <ChefShape />
