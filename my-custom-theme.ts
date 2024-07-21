
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
    name: 'my-custom-theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `system-ui`,
		"--theme-font-family-heading": `system-ui`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "8px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "0 0 0",
		"--on-secondary": "0 0 0",
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "255 255 255",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #7898f7 
		"--color-primary-50": "235 240 254", // #ebf0fe
		"--color-primary-100": "228 234 253", // #e4eafd
		"--color-primary-200": "221 229 253", // #dde5fd
		"--color-primary-300": "201 214 252", // #c9d6fc
		"--color-primary-400": "161 183 249", // #a1b7f9
		"--color-primary-500": "120 152 247", // #7898f7
		"--color-primary-600": "108 137 222", // #6c89de
		"--color-primary-700": "90 114 185", // #5a72b9
		"--color-primary-800": "72 91 148", // #485b94
		"--color-primary-900": "59 74 121", // #3b4a79
		// secondary | #d4d3de 
		"--color-secondary-50": "249 248 250", // #f9f8fa
		"--color-secondary-100": "246 246 248", // #f6f6f8
		"--color-secondary-200": "244 244 247", // #f4f4f7
		"--color-secondary-300": "238 237 242", // #eeedf2
		"--color-secondary-400": "225 224 232", // #e1e0e8
		"--color-secondary-500": "212 211 222", // #d4d3de
		"--color-secondary-600": "191 190 200", // #bfbec8
		"--color-secondary-700": "159 158 167", // #9f9ea7
		"--color-secondary-800": "127 127 133", // #7f7f85
		"--color-secondary-900": "104 103 109", // #68676d
		// tertiary | #e70d8d 
		"--color-tertiary-50": "251 219 238", // #fbdbee
		"--color-tertiary-100": "250 207 232", // #facfe8
		"--color-tertiary-200": "249 195 227", // #f9c3e3
		"--color-tertiary-300": "245 158 209", // #f59ed1
		"--color-tertiary-400": "238 86 175", // #ee56af
		"--color-tertiary-500": "231 13 141", // #e70d8d
		"--color-tertiary-600": "208 12 127", // #d00c7f
		"--color-tertiary-700": "173 10 106", // #ad0a6a
		"--color-tertiary-800": "139 8 85", // #8b0855
		"--color-tertiary-900": "113 6 69", // #710645
		// success | #8ed327 
		"--color-success-50": "238 248 223", // #eef8df
		"--color-success-100": "232 246 212", // #e8f6d4
		"--color-success-200": "227 244 201", // #e3f4c9
		"--color-success-300": "210 237 169", // #d2eda9
		"--color-success-400": "176 224 104", // #b0e068
		"--color-success-500": "142 211 39", // #8ed327
		"--color-success-600": "128 190 35", // #80be23
		"--color-success-700": "107 158 29", // #6b9e1d
		"--color-success-800": "85 127 23", // #557f17
		"--color-success-900": "70 103 19", // #466713
		// warning | #EAB308 
		"--color-warning-50": "252 244 218", // #fcf4da
		"--color-warning-100": "251 240 206", // #fbf0ce
		"--color-warning-200": "250 236 193", // #faecc1
		"--color-warning-300": "247 225 156", // #f7e19c
		"--color-warning-400": "240 202 82", // #f0ca52
		"--color-warning-500": "234 179 8", // #EAB308
		"--color-warning-600": "211 161 7", // #d3a107
		"--color-warning-700": "176 134 6", // #b08606
		"--color-warning-800": "140 107 5", // #8c6b05
		"--color-warning-900": "115 88 4", // #735804
		// error | #d21919 
		"--color-error-50": "248 221 221", // #f8dddd
		"--color-error-100": "246 209 209", // #f6d1d1
		"--color-error-200": "244 198 198", // #f4c6c6
		"--color-error-300": "237 163 163", // #eda3a3
		"--color-error-400": "224 94 94", // #e05e5e
		"--color-error-500": "210 25 25", // #d21919
		"--color-error-600": "189 23 23", // #bd1717
		"--color-error-700": "158 19 19", // #9e1313
		"--color-error-800": "126 15 15", // #7e0f0f
		"--color-error-900": "103 12 12", // #670c0c
		// surface | #e6e6e6 
		"--color-surface-50": "251 251 251", // #fbfbfb
		"--color-surface-100": "250 250 250", // #fafafa
		"--color-surface-200": "249 249 249", // #f9f9f9
		"--color-surface-300": "245 245 245", // #f5f5f5
		"--color-surface-400": "238 238 238", // #eeeeee
		"--color-surface-500": "230 230 230", // #e6e6e6
		"--color-surface-600": "207 207 207", // #cfcfcf
		"--color-surface-700": "173 173 173", // #adadad
		"--color-surface-800": "138 138 138", // #8a8a8a
		"--color-surface-900": "113 113 113", // #717171
		
	}
}