<template>
  <div id="appRoot">
    <v-app id="inspire" class="app">
      <main>
        <v-content>
          <v-layout>
            <v-card class="mx-auto mt-12" width="50rem">
              <v-card-text>
                <v-form ref="form" v-model="valid">
                  <v-datetime-input
                    label="The Date-Time Input"
                    outlined
                    filled
                    clearable
                    :rules="[v => !!v || 'Datetime needs to be filled']"
                    v-model="value"
                  />
                </v-form>
                <div>Value is: {{ value }}</div>
                <div>Form is valid: {{ valid }}</div>
              </v-card-text>
            </v-card>
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
    valid: true
  })
};
</script>
