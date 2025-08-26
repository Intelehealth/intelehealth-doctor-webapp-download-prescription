export const VISIT_SECTIONS = {
    "additional_documents": {
        logo: "assets/svgs/additional-documents.svg",
        key: "additional_documents"
    },
    "additional_notes": {
        logo: "assets/svgs/note-icon-green.svg",
        key: "additional_notes"
    },
    "check_up_reason": {
        logo: "assets/svgs/check-up-reason.svg",
        key: "check_up_reason"
    },
    "consultation_details": {
        logo: "assets/svgs/consultation-details.svg",
        key: "consultation_details"
    },
    "medical_history": {
        logo: "assets/svgs/medical-history.svg",
        key: "medical_history"
    },
    "physical_examination": {
        logo: "assets/svgs/physical-examination.svg",
        key: "physical_examination"
    },
    "refer_to_specialist": {
        logo: "assets/svgs/refer-specialist.svg",
        key: "refer_to_specialist"
    },
    "vitals": {
        logo: "assets/svgs/vitals.svg",
        key: "vitals"
    },
    "diagnostics": {
        logo: "assets/svgs/diagnosis-green.svg",
        key: "diagnostics"
    },
};
export const checkIsEnabled = (key, is_enabled = false, otherFields = {}) => {
    // Set default expanded value
    let expanded = true;
    // Destructure frequently used fields from otherFields
    const { visitEnded, visitCompleted, visitNotePresent, hasVitalsEnabled, notes_section, attachment_section } = otherFields;
    switch (key) {
        case VISIT_SECTIONS['refer_to_specialist'].key:
            is_enabled = is_enabled && !visitEnded && !visitCompleted && !visitNotePresent;
            expanded = !!visitNotePresent;
            break;
        case VISIT_SECTIONS['vitals'].key:
            is_enabled = is_enabled && !!hasVitalsEnabled;
            break;
        case VISIT_SECTIONS['additional_notes'].key:
            is_enabled = is_enabled && !!notes_section;
            break;
        case VISIT_SECTIONS['additional_documents'].key:
            is_enabled = is_enabled && !!attachment_section;
            break;
        case VISIT_SECTIONS['consultation_details'].key:
            is_enabled = is_enabled;
            break;
        case VISIT_SECTIONS['check_up_reason'].key:
            is_enabled = is_enabled;
            break;
        case VISIT_SECTIONS['medical_history'].key:
            is_enabled = is_enabled;
            break;
        case VISIT_SECTIONS['physical_examination'].key:
            is_enabled = is_enabled;
            break;
        case 'patient_interaction':
            is_enabled = false;
            break;
        default:
            // For other sections, return the initial is_enabled and expanded
            break;
    }
    return { is_enabled, expanded };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlzaXQtc2VjdGlvbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9saWItcHJlc2NpcHRpb24vc3JjL2xpYi91dGlscy92aXNpdC1zZWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLENBQUMsTUFBTSxjQUFjLEdBQUc7SUFDMUIsc0JBQXNCLEVBQUU7UUFDcEIsSUFBSSxFQUFFLHNDQUFzQztRQUM1QyxHQUFHLEVBQUUsc0JBQXNCO0tBQzlCO0lBQ0Qsa0JBQWtCLEVBQUU7UUFDaEIsSUFBSSxFQUFFLGlDQUFpQztRQUN2QyxHQUFHLEVBQUUsa0JBQWtCO0tBQzFCO0lBQ0QsaUJBQWlCLEVBQUU7UUFDZixJQUFJLEVBQUUsaUNBQWlDO1FBQ3ZDLEdBQUcsRUFBRSxpQkFBaUI7S0FDekI7SUFDRCxzQkFBc0IsRUFBRTtRQUNwQixJQUFJLEVBQUUsc0NBQXNDO1FBQzVDLEdBQUcsRUFBRSxzQkFBc0I7S0FDOUI7SUFDRCxpQkFBaUIsRUFBRTtRQUNmLElBQUksRUFBRSxpQ0FBaUM7UUFDdkMsR0FBRyxFQUFFLGlCQUFpQjtLQUN6QjtJQUNELHNCQUFzQixFQUFFO1FBQ3BCLElBQUksRUFBRSxzQ0FBc0M7UUFDNUMsR0FBRyxFQUFFLHNCQUFzQjtLQUM5QjtJQUNELHFCQUFxQixFQUFFO1FBQ25CLElBQUksRUFBRSxrQ0FBa0M7UUFDeEMsR0FBRyxFQUFFLHFCQUFxQjtLQUM3QjtJQUNELFFBQVEsRUFBRTtRQUNOLElBQUksRUFBRSx3QkFBd0I7UUFDOUIsR0FBRyxFQUFFLFFBQVE7S0FDaEI7SUFDRCxhQUFhLEVBQUU7UUFDWCxJQUFJLEVBQUUsaUNBQWlDO1FBQ3ZDLEdBQUcsRUFBRSxhQUFhO0tBQ3JCO0NBQ0osQ0FBQTtBQUVELE1BQU0sQ0FBQyxNQUFNLGNBQWMsR0FBRyxDQUMxQixHQUFXLEVBQ1gsVUFBVSxHQUFHLEtBQUssRUFDbEIsY0FBbUIsRUFBRSxFQUN2QixFQUFFO0lBQ0EsNkJBQTZCO0lBQzdCLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQztJQUVwQixzREFBc0Q7SUFDdEQsTUFBTSxFQUFFLFVBQVUsRUFBRSxjQUFjLEVBQUUsZ0JBQWdCLEVBQUUsZ0JBQWdCLEVBQUUsYUFBYSxFQUFFLGtCQUFrQixFQUFFLEdBQUcsV0FBVyxDQUFDO0lBRTFILFFBQVEsR0FBRyxFQUFFO1FBQ1QsS0FBSyxjQUFjLENBQUMscUJBQXFCLENBQUMsQ0FBQyxHQUFHO1lBQzFDLFVBQVUsR0FBRyxVQUFVLElBQUksQ0FBQyxVQUFVLElBQUksQ0FBQyxjQUFjLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztZQUMvRSxRQUFRLEdBQUcsQ0FBQyxDQUFDLGdCQUFnQixDQUFDO1lBQzlCLE1BQU07UUFFVixLQUFLLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHO1lBQzdCLFVBQVUsR0FBRyxVQUFVLElBQUksQ0FBQyxDQUFDLGdCQUFnQixDQUFDO1lBQzlDLE1BQU07UUFFVixLQUFLLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLEdBQUc7WUFDdkMsVUFBVSxHQUFHLFVBQVUsSUFBSSxDQUFDLENBQUMsYUFBYSxDQUFDO1lBQzNDLE1BQU07UUFFVixLQUFLLGNBQWMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLEdBQUc7WUFDM0MsVUFBVSxHQUFHLFVBQVUsSUFBSSxDQUFDLENBQUMsa0JBQWtCLENBQUM7WUFDaEQsTUFBTTtRQUVWLEtBQUssY0FBYyxDQUFDLHNCQUFzQixDQUFDLENBQUMsR0FBRztZQUMzQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1lBQ3hCLE1BQU07UUFFVixLQUFLLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEdBQUc7WUFDdEMsVUFBVSxHQUFHLFVBQVUsQ0FBQztZQUN4QixNQUFNO1FBRVYsS0FBSyxjQUFjLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxHQUFHO1lBQ3RDLFVBQVUsR0FBRyxVQUFVLENBQUM7WUFDeEIsTUFBTTtRQUVWLEtBQUssY0FBYyxDQUFDLHNCQUFzQixDQUFDLENBQUMsR0FBRztZQUMzQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1lBQ3hCLE1BQU07UUFDVixLQUFLLHFCQUFxQjtZQUN0QixVQUFVLEdBQUcsS0FBSyxDQUFDO1lBQ25CLE1BQU07UUFFVjtZQUNJLGlFQUFpRTtZQUNqRSxNQUFNO0tBQ2I7SUFFRCxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxDQUFDO0FBQ3BDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBWSVNJVF9TRUNUSU9OUyA9IHtcbiAgICBcImFkZGl0aW9uYWxfZG9jdW1lbnRzXCI6IHtcbiAgICAgICAgbG9nbzogXCJhc3NldHMvc3Zncy9hZGRpdGlvbmFsLWRvY3VtZW50cy5zdmdcIixcbiAgICAgICAga2V5OiBcImFkZGl0aW9uYWxfZG9jdW1lbnRzXCJcbiAgICB9LFxuICAgIFwiYWRkaXRpb25hbF9ub3Rlc1wiOiB7XG4gICAgICAgIGxvZ286IFwiYXNzZXRzL3N2Z3Mvbm90ZS1pY29uLWdyZWVuLnN2Z1wiLFxuICAgICAgICBrZXk6IFwiYWRkaXRpb25hbF9ub3Rlc1wiXG4gICAgfSxcbiAgICBcImNoZWNrX3VwX3JlYXNvblwiOiB7XG4gICAgICAgIGxvZ286IFwiYXNzZXRzL3N2Z3MvY2hlY2stdXAtcmVhc29uLnN2Z1wiLFxuICAgICAgICBrZXk6IFwiY2hlY2tfdXBfcmVhc29uXCJcbiAgICB9LFxuICAgIFwiY29uc3VsdGF0aW9uX2RldGFpbHNcIjoge1xuICAgICAgICBsb2dvOiBcImFzc2V0cy9zdmdzL2NvbnN1bHRhdGlvbi1kZXRhaWxzLnN2Z1wiLFxuICAgICAgICBrZXk6IFwiY29uc3VsdGF0aW9uX2RldGFpbHNcIlxuICAgIH0sXG4gICAgXCJtZWRpY2FsX2hpc3RvcnlcIjoge1xuICAgICAgICBsb2dvOiBcImFzc2V0cy9zdmdzL21lZGljYWwtaGlzdG9yeS5zdmdcIixcbiAgICAgICAga2V5OiBcIm1lZGljYWxfaGlzdG9yeVwiXG4gICAgfSxcbiAgICBcInBoeXNpY2FsX2V4YW1pbmF0aW9uXCI6IHtcbiAgICAgICAgbG9nbzogXCJhc3NldHMvc3Zncy9waHlzaWNhbC1leGFtaW5hdGlvbi5zdmdcIixcbiAgICAgICAga2V5OiBcInBoeXNpY2FsX2V4YW1pbmF0aW9uXCJcbiAgICB9LFxuICAgIFwicmVmZXJfdG9fc3BlY2lhbGlzdFwiOiB7XG4gICAgICAgIGxvZ286IFwiYXNzZXRzL3N2Z3MvcmVmZXItc3BlY2lhbGlzdC5zdmdcIixcbiAgICAgICAga2V5OiBcInJlZmVyX3RvX3NwZWNpYWxpc3RcIlxuICAgIH0sXG4gICAgXCJ2aXRhbHNcIjoge1xuICAgICAgICBsb2dvOiBcImFzc2V0cy9zdmdzL3ZpdGFscy5zdmdcIixcbiAgICAgICAga2V5OiBcInZpdGFsc1wiXG4gICAgfSxcbiAgICBcImRpYWdub3N0aWNzXCI6IHtcbiAgICAgICAgbG9nbzogXCJhc3NldHMvc3Zncy9kaWFnbm9zaXMtZ3JlZW4uc3ZnXCIsXG4gICAgICAgIGtleTogXCJkaWFnbm9zdGljc1wiXG4gICAgfSxcbn1cblxuZXhwb3J0IGNvbnN0IGNoZWNrSXNFbmFibGVkID0gKFxuICAgIGtleTogc3RyaW5nLFxuICAgIGlzX2VuYWJsZWQgPSBmYWxzZSxcbiAgICBvdGhlckZpZWxkczogYW55ID0ge31cbikgPT4ge1xuICAgIC8vIFNldCBkZWZhdWx0IGV4cGFuZGVkIHZhbHVlXG4gICAgbGV0IGV4cGFuZGVkID0gdHJ1ZTtcblxuICAgIC8vIERlc3RydWN0dXJlIGZyZXF1ZW50bHkgdXNlZCBmaWVsZHMgZnJvbSBvdGhlckZpZWxkc1xuICAgIGNvbnN0IHsgdmlzaXRFbmRlZCwgdmlzaXRDb21wbGV0ZWQsIHZpc2l0Tm90ZVByZXNlbnQsIGhhc1ZpdGFsc0VuYWJsZWQsIG5vdGVzX3NlY3Rpb24sIGF0dGFjaG1lbnRfc2VjdGlvbiB9ID0gb3RoZXJGaWVsZHM7XG5cbiAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgICBjYXNlIFZJU0lUX1NFQ1RJT05TWydyZWZlcl90b19zcGVjaWFsaXN0J10ua2V5OlxuICAgICAgICAgICAgaXNfZW5hYmxlZCA9IGlzX2VuYWJsZWQgJiYgIXZpc2l0RW5kZWQgJiYgIXZpc2l0Q29tcGxldGVkICYmICF2aXNpdE5vdGVQcmVzZW50O1xuICAgICAgICAgICAgZXhwYW5kZWQgPSAhIXZpc2l0Tm90ZVByZXNlbnQ7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIFZJU0lUX1NFQ1RJT05TWyd2aXRhbHMnXS5rZXk6XG4gICAgICAgICAgICBpc19lbmFibGVkID0gaXNfZW5hYmxlZCAmJiAhIWhhc1ZpdGFsc0VuYWJsZWQ7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIFZJU0lUX1NFQ1RJT05TWydhZGRpdGlvbmFsX25vdGVzJ10ua2V5OlxuICAgICAgICAgICAgaXNfZW5hYmxlZCA9IGlzX2VuYWJsZWQgJiYgISFub3Rlc19zZWN0aW9uO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBWSVNJVF9TRUNUSU9OU1snYWRkaXRpb25hbF9kb2N1bWVudHMnXS5rZXk6XG4gICAgICAgICAgICBpc19lbmFibGVkID0gaXNfZW5hYmxlZCAmJiAhIWF0dGFjaG1lbnRfc2VjdGlvbjtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgVklTSVRfU0VDVElPTlNbJ2NvbnN1bHRhdGlvbl9kZXRhaWxzJ10ua2V5OlxuICAgICAgICAgICAgaXNfZW5hYmxlZCA9IGlzX2VuYWJsZWQ7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIFZJU0lUX1NFQ1RJT05TWydjaGVja191cF9yZWFzb24nXS5rZXk6XG4gICAgICAgICAgICBpc19lbmFibGVkID0gaXNfZW5hYmxlZDtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgVklTSVRfU0VDVElPTlNbJ21lZGljYWxfaGlzdG9yeSddLmtleTpcbiAgICAgICAgICAgIGlzX2VuYWJsZWQgPSBpc19lbmFibGVkO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBWSVNJVF9TRUNUSU9OU1sncGh5c2ljYWxfZXhhbWluYXRpb24nXS5rZXk6XG4gICAgICAgICAgICBpc19lbmFibGVkID0gaXNfZW5hYmxlZDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdwYXRpZW50X2ludGVyYWN0aW9uJzpcbiAgICAgICAgICAgIGlzX2VuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAvLyBGb3Igb3RoZXIgc2VjdGlvbnMsIHJldHVybiB0aGUgaW5pdGlhbCBpc19lbmFibGVkIGFuZCBleHBhbmRlZFxuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgaXNfZW5hYmxlZCwgZXhwYW5kZWQgfTtcbn07Il19