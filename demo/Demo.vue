<template>
  <div id="appRoot">
    <v-app id="inspire" class="app">
      <main>
        <v-content>
          <v-layout>
            <v-row justify="center">
              <v-col cols="12">
                <v-card class="mx-auto mt-12" width="50rem">
                  <v-card-text>
                    <v-form ref="form" v-model="valid">
                      <v-datetime-input
                        label="The Date-Time Input"
                        :outlined="outlined"
                        :filled="filled"
                        :clearable="clearable"
                        :dense="dense"
                        :readonly="readonly"
                        :disabled="disabled"
                        :hide-details="hideDetails"
                        :rules="[v => !!v || 'Datetime needs to be filled']"
                        v-model="value"
                      />
                    </v-form>
                    <div>Value is: {{ value }}</div>
                    <div>Form is valid: {{ valid }}</div>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="12">
                <v-card class="mx-auto mt-5" width="50rem">
                  <v-card-text>
                    <v-switch dense hide-details v-model="outlined" label="Outlined"></v-switch>
                    <v-switch dense hide-details v-model="filled" label="Filled"></v-switch>
                    <v-switch dense hide-details v-model="clearable" label="Clearable"></v-switch>
                    <v-switch dense hide-details v-model="dense" label="Dense"></v-switch>
                    <v-switch dense hide-details v-model="readonly" label="Readonly"></v-switch>
                    <v-switch dense hide-details v-model="disabled" label="Disabled"></v-switch>
                    <v-switch dense hide-details v-model="hideDetails" label="Hide Details"></v-switch>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-layout>
        </v-content>
      </main>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "demo",
  data: () => ({
    value: null,
    outlined: false,
    filled: false,
    clearable: false,
    dense: false,
    readonly: false,
    disabled: false,
    hideDetails: false,
    valid: true
  })
};
</script>
