<template>
  <div class="main">
    <DxSelectBox
      v-model:value="selectedAlgorithm"
      value-expr="Value"
      display-expr="Text"
      :items="itemsData"
      :width="300"
    />
    <DxDateBox
      :width="300"
      id="date"
      v-model="now"
      type="date"
      label="Date with the short year"
      label-mode="outside"
      :display-format="format"
    />
    <DxDataGrid
      id="grid"
      :data-source="employeesData"
      :width="400"
      key-expr="ID"
      :show-borders="true"
    >
      <DxEditing
        mode="cell"
        :allow-updating="true"
      />
      <DxColumn data-field="FirstName"/>
      <DxColumn data-field="LastName"/>
      <DxColumn
        data-field="HireDate"
        data-type="date"
        :editor-options="editorOptions"
        :width="125"
      />
    </DxDataGrid>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { DxDataGrid, DxColumn, DxEditing } from 'devextreme-vue/data-grid';
import { DxDateBox } from 'devextreme-vue/date-box';
import { DxSelectBox } from 'devextreme-vue/select-box';
import type { Employee, Item } from '@/data';
import { employees, items } from '@/data';
import { formatter, parser } from '@/utils';
import 'devextreme/dist/css/dx.material.blue.light.compact.css';

const now = ref(new Date());
const selectedAlgorithm = ref<string>('javascript');

const employeesData = ref<Employee[]>(employees);
const itemsData = ref<Item[]>(items);

const format = computed(() => ({
  parser: (val: string) => parser(val, selectedAlgorithm.value),
  formatter: (val: number | Date) => formatter(val),
}));

const editorOptions = computed(() => ({
  displayFormat: format.value,
}));
</script>

<style scoped>
#grid, #date {
  margin-top: 50px;
}
</style>
