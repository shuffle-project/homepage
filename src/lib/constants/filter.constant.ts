import { ACCESSIBLE_MATERIAL_PACK } from './accessibleMaterialPack.constant';
import { ACCESSIBLE_MOODLE_COURSE } from './accessibleMoodleCourse.constant';
import { BLINDDATE } from './blindDate.constant';
import { CERTIFICATE_COURSE } from './certificateCourse.constant';
import { DIGITAL_ACCESSIBILITY_UNIVERSITY } from './digitalAccessibilityUniversity.constant';
import { IAAP_TOOLKITS } from './iaapToolkits.constant';
import { ILIAS_COURSE } from './iliasCourse.constant';
import { MATURITY_MODEL } from './maturityModel.constant';
import { EASY_WEB_CHECK } from './easyWebCheck.constant';
import { MELVIN } from './melvin.constant';
import { MOOC_COURSES } from './moocCourses.constant';

export const CONSULTATION_PROJECTS = [MATURITY_MODEL, DIGITAL_ACCESSIBILITY_UNIVERSITY];
export const AWARENESS_PROJECTS = [
	BLINDDATE,
	MOOC_COURSES,
	MATURITY_MODEL,
	DIGITAL_ACCESSIBILITY_UNIVERSITY
];
export const TEACHING_PROJECTS = [
	ACCESSIBLE_MATERIAL_PACK,
	ACCESSIBLE_MOODLE_COURSE,
	ILIAS_COURSE,
	MATURITY_MODEL,
	BLINDDATE,
	MELVIN,
	DIGITAL_ACCESSIBILITY_UNIVERSITY
];
export const STRATEGY_PROJECTS = [MATURITY_MODEL, DIGITAL_ACCESSIBILITY_UNIVERSITY];
export const IT_PROJECTS = [MELVIN, MATURITY_MODEL, DIGITAL_ACCESSIBILITY_UNIVERSITY, EASY_WEB_CHECK];
export const CERTIFICATION_PROJECTS = [
	CERTIFICATE_COURSE,
	IAAP_TOOLKITS,
	DIGITAL_ACCESSIBILITY_UNIVERSITY
];

export const FILTER_OPTIONS = [
	{
		label: 'Beratung und Anlaufstellen',
		value: 'consultation'
	},
	{
		label: 'Sensibilisierung',
		value: 'awareness'
	},
	{
		label: 'Studium und Lehre',
		value: 'teaching'
	},
	{
		label: 'Strategieentwicklung',
		value: 'strategy'
	},
	{
		label: 'IT und Technik',
		value: 'it'
	},
	{
		label: 'Zertifzierung',
		value: 'certification'
	}
] as const;
