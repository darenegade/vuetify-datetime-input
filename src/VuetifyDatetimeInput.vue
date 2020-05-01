<template>
  <div>
    <div class="overline">{{ label }}</div>
    <v-input
      :readonly="readonly"
      :disabled="disabled"
      :hide-details="hideDetails"
      v-model="value"
      :rules="[...rules, dateFilled]"
      :dense="dense"
      :error.sync="error"
      :error-messages="errorMessages"
      :persistent-hint="persistentHint"
      :hint="hint"
    >
      <v-row>
        <v-col cols="6">
          <v-text-field
            required
            :label="dateLabel"
            ref="day"
            :readonly="readonly"
            :disabled="disabled"
            v-model="day"
            v-mask="dayFormat"
            :error="error"
            hide-details
            :dense="dense"
            :filled="filled"
            :outlined="outlined"
            @focusout="leaveInput"
            @focus="enterInput"
            @blur="sendInput"
            type="date"
          />
        </v-col>
        <v-col cols="6">
          <v-text-field
            required
            :label="timeLabel"
            ref="time"
            :readonly="readonly"
            :disabled="disabled"
            v-model="time"
            v-mask="timeFormat"
            :error="error"
            hide-details
            :dense="dense"
            :filled="filled"
            :outlined="outlined"
            @focusout="leaveInput"
            @focus="enterInput"
            @blur="sendInput"
            type="time"
          >
            <template v-if="clearable && !readonly" #append-outer>
              <v-btn icon :disabled="!value" @click="clear">
                <v-icon v-if="value">mdi-close</v-icon>
              </v-btn>
            </template>
          </v-text-field>
        </v-col>
      </v-row>
    </v-input>
  </div>
</template>

<script>
import { VBtn, VCol, VIcon, VInput, VRow, VTextField } from "vuetify/lib";
import dayjs from "dayjs";
import dayjsDe from "dayjs/locale/de";
import dayjsEs from "dayjs/locale/es";
import customParseFormat from "dayjs/plugin/customParseFormat";
import localizedFormat from "dayjs/plugin/localizedFormat";

export default {
  name: "VuetifyDatetimeInput",
  components: {
    "v-btn": VBtn,
    "v-icon": VIcon,
    "v-input": VInput,
    "v-text-field": VTextField,
    "v-row": VRow,
    "v-col": VCol
  },
  props: {
    value: String,
    readonly: Boolean,
    disabled: Boolean,
    hideDetails: Boolean,
    dense: Boolean,
    filled: Boolean,
    outlined: Boolean,
    clearable: Boolean,
    persistentHint: Boolean,
    hint: String,
    label: String,
    timeLabel: {
      type: String,
      default: () => "Time"
    },
    dateLabel: {
      type: String,
      default: () => "Date"
    },
    incompleteErrorMessage: {
      type: String,
      default: () => "Date and Time needs to be filled"
    },
    dateformatErrorMessage: {
      type: String,
      default: () => "Wrong Dateformat"
    },
    rules: {
      type: Array,
      default: () => []
    },
    lang: {
      type: String,
      default: () => "en"
    }
  },
  data() {
    return {
      day: null,
      dayFormat: "####-##-##",
      time: null,
      timeFormat: "##:##",
      browserSupportsDateInput: true,
      localeFormat: null,
      error: false,
      errorMessages: "",
      dateFilled: () =>
        this.checkBothFieldsFilled() || this.incompleteErrorMessage
    };
  },
  created() {
    this.setBrowserSupportsDateInput();
    if (this.isCustomTextMode()) {
      dayjs.locale(this.lang);
      dayjs.extend(customParseFormat);
      dayjs.extend(localizedFormat);

      switch (this.lang) {
        case "de":
          this.localeFormat = dayjsDe.formats.L;
          break;
        case "es":
          this.localeFormat = dayjsEs.formats.L;
          break;
      }
      this.dayFormat = this.localeFormat
        .replace(/DD/, "##")
        .replace(/MM/, "##")
        .replace(/YYYY/, "####");
    }
    this.parseValue();
  },
  watch: {
    value: function() {
      this.parseValue();
    }
  },
  methods: {
    setBrowserSupportsDateInput() {
      var i = document.createElement("input");
      i.setAttribute("type", "date");
      this.browserSupportsDateInput = i.type !== "text";
    },
    clear() {
      this.errorMessages = "";
      this.time = null;
      this.day = null;
      this.$emit("input", this.getDate());
    },
    getDate() {
      if (this.day && this.time) {
        this.error = false;
        this.errorMessages = "";
        let date;
        if (this.isCustomTextMode()) {
          let timeSplit = this.time.split(":");

          date = dayjs(this.day, this.localeFormat)
            .add(timeSplit[0], "h")
            .add(timeSplit[1], "m")
            .toDate();
        } else {
          date = new Date(this.day + "T" + this.time);
        }
        return date.toISOString();
      }
      return null;
    },
    parseValue() {
      if (this.value) {
        let newDate = dayjs(this.value).toDate();
        this.day = this.parseDay(newDate);
        this.time = this.parseTime(newDate);
      } else {
        this.day = null;
        this.time = null;
      }
    },
    parseDay(timestamp) {
      if (this.isCustomTextMode()) {
        return dayjs(timestamp).format("L");
      } else {
        return timestamp.toISOString().replace(/T.*/, "");
      }
    },
    parseTime(timestamp) {
      return timestamp.toLocaleTimeString(navigator.language, {
        hour: "2-digit",
        minute: "2-digit"
      });
    },
    leaveInput() {
      if (!this.checkBothFieldsFilled()) {
        this.error = true;
        this.errorMessages = this.incompleteErrorMessage;
      }
    },
    enterInput() {
      if (!this.checkBothFieldsFilled()) {
        this.error = false;
        this.errorMessages = "";
      }
    },
    sendInput() {
      if (this.checkBothFieldsFilled()) {
        try {
          let newDate = this.getDate();
          this.$emit("input", newDate);
        } catch (e) {
          this.error = true;
          this.errorMessages = this.dateformatErrorMessage;
        }
      }
    },
    checkBothFieldsFilled() {
      return !!(this.time && this.day) || (!this.time && !this.day);
    },
    isCustomTextMode() {
      return !this.browserSupportsDateInput && this.lang !== "en";
    }
  }
};
</script>
