<template>
  <div class="main">
    <DxSelectBox
      v-model:value="value"
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
      :display-format="format"
    />
    <DxDataGrid
      id="grid"
      :data-source="employeesData"
      :width="400"
      :key-expr="'ID'"
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
      />
    </DxDataGrid>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import 'devextreme/dist/css/dx.material.blue.light.compact.css';
import DxDataGrid, { DxColumn, DxEditing } from 'devextreme-vue/data-grid';
import DxDateBox from 'devextreme-vue/date-box';
import DxSelectBox from 'devextreme-vue/select-box';
import { type Employee, type Item, items, employees } from '@/data';
import { formatter, parser } from '@/utils';

const now = new Date();
const value = ref('javascript');

const employeesData = ref<Employee[]>(employees);
const itemsData = ref<Item[]>(items);

const format = {
  parser: (val: string) => parser(val, value.value),
  formatter: (val: Date) => formatter(val),
};

const editorOptions = {
  displayFormat: format,
};

</script>
<style scoped>
#grid, #date {
  margin-top: 50px;
}

</style>
