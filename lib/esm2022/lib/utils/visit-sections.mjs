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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlzaXQtc2VjdGlvbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9saWItcHJlc2NpcHRpb24vc3JjL2xpYi91dGlscy92aXNpdC1zZWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLENBQUMsTUFBTSxjQUFjLEdBQUc7SUFDMUIsc0JBQXNCLEVBQUU7UUFDcEIsSUFBSSxFQUFFLHNDQUFzQztRQUM1QyxHQUFHLEVBQUUsc0JBQXNCO0tBQzlCO0lBQ0Qsa0JBQWtCLEVBQUU7UUFDaEIsSUFBSSxFQUFFLGlDQUFpQztRQUN2QyxHQUFHLEVBQUUsa0JBQWtCO0tBQzFCO0lBQ0QsaUJBQWlCLEVBQUU7UUFDZixJQUFJLEVBQUUsaUNBQWlDO1FBQ3ZDLEdBQUcsRUFBRSxpQkFBaUI7S0FDekI7SUFDRCxzQkFBc0IsRUFBRTtRQUNwQixJQUFJLEVBQUUsc0NBQXNDO1FBQzVDLEdBQUcsRUFBRSxzQkFBc0I7S0FDOUI7SUFDRCxpQkFBaUIsRUFBRTtRQUNmLElBQUksRUFBRSxpQ0FBaUM7UUFDdkMsR0FBRyxFQUFFLGlCQUFpQjtLQUN6QjtJQUNELHNCQUFzQixFQUFFO1FBQ3BCLElBQUksRUFBRSxzQ0FBc0M7UUFDNUMsR0FBRyxFQUFFLHNCQUFzQjtLQUM5QjtJQUNELHFCQUFxQixFQUFFO1FBQ25CLElBQUksRUFBRSxrQ0FBa0M7UUFDeEMsR0FBRyxFQUFFLHFCQUFxQjtLQUM3QjtJQUNELFFBQVEsRUFBRTtRQUNOLElBQUksRUFBRSx3QkFBd0I7UUFDOUIsR0FBRyxFQUFFLFFBQVE7S0FDaEI7SUFDRCxhQUFhLEVBQUU7UUFDWCxJQUFJLEVBQUUsaUNBQWlDO1FBQ3ZDLEdBQUcsRUFBRSxhQUFhO0tBQ3JCO0NBQ0osQ0FBQTtBQUVELE1BQU0sQ0FBQyxNQUFNLGNBQWMsR0FBRyxDQUMxQixHQUFXLEVBQ1gsVUFBVSxHQUFHLEtBQUssRUFDbEIsY0FBbUIsRUFBRSxFQUN2QixFQUFFO0lBQ0EsNkJBQTZCO0lBQzdCLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQztJQUVwQixzREFBc0Q7SUFDdEQsTUFBTSxFQUFFLFVBQVUsRUFBRSxjQUFjLEVBQUUsZ0JBQWdCLEVBQUUsZ0JBQWdCLEVBQUUsYUFBYSxFQUFFLGtCQUFrQixFQUFFLEdBQUcsV0FBVyxDQUFDO0lBRTFILFFBQVEsR0FBRyxFQUFFO1FBQ1QsS0FBSyxjQUFjLENBQUMscUJBQXFCLENBQUMsQ0FBQyxHQUFHO1lBQzFDLFVBQVUsR0FBRyxVQUFVLElBQUksQ0FBQyxVQUFVLElBQUksQ0FBQyxjQUFjLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztZQUMvRSxRQUFRLEdBQUcsQ0FBQyxDQUFDLGdCQUFnQixDQUFDO1lBQzlCLE1BQU07UUFFVixLQUFLLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHO1lBQzdCLFVBQVUsR0FBRyxVQUFVLElBQUksQ0FBQyxDQUFDLGdCQUFnQixDQUFDO1lBQzlDLE1BQU07UUFFVixLQUFLLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLEdBQUc7WUFDdkMsVUFBVSxHQUFHLFVBQVUsSUFBSSxDQUFDLENBQUMsYUFBYSxDQUFDO1lBQzNDLE1BQU07UUFFVixLQUFLLGNBQWMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLEdBQUc7WUFDM0MsVUFBVSxHQUFHLFVBQVUsSUFBSSxDQUFDLENBQUMsa0JBQWtCLENBQUM7WUFDaEQsTUFBTTtRQUVWLEtBQUssY0FBYyxDQUFDLHNCQUFzQixDQUFDLENBQUMsR0FBRztZQUMzQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1lBQ3hCLE1BQU07UUFFVixLQUFLLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEdBQUc7WUFDdEMsVUFBVSxHQUFHLFVBQVUsQ0FBQztZQUN4QixNQUFNO1FBRVYsS0FBSyxjQUFjLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxHQUFHO1lBQ3RDLFVBQVUsR0FBRyxVQUFVLENBQUM7WUFDeEIsTUFBTTtRQUVWLEtBQUssY0FBYyxDQUFDLHNCQUFzQixDQUFDLENBQUMsR0FBRztZQUMzQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1lBQ3hCLE1BQU07UUFDVixLQUFLLHFCQUFxQjtZQUN0QixVQUFVLEdBQUcsS0FBSyxDQUFDO1lBQ25CLE1BQU07UUFFVjtZQUNJLGlFQUFpRTtZQUNqRSxNQUFNO0tBQ2I7SUFFRCxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxDQUFDO0FBQ3BDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBWSVNJVF9TRUNUSU9OUyA9IHtcclxuICAgIFwiYWRkaXRpb25hbF9kb2N1bWVudHNcIjoge1xyXG4gICAgICAgIGxvZ286IFwiYXNzZXRzL3N2Z3MvYWRkaXRpb25hbC1kb2N1bWVudHMuc3ZnXCIsXHJcbiAgICAgICAga2V5OiBcImFkZGl0aW9uYWxfZG9jdW1lbnRzXCJcclxuICAgIH0sXHJcbiAgICBcImFkZGl0aW9uYWxfbm90ZXNcIjoge1xyXG4gICAgICAgIGxvZ286IFwiYXNzZXRzL3N2Z3Mvbm90ZS1pY29uLWdyZWVuLnN2Z1wiLFxyXG4gICAgICAgIGtleTogXCJhZGRpdGlvbmFsX25vdGVzXCJcclxuICAgIH0sXHJcbiAgICBcImNoZWNrX3VwX3JlYXNvblwiOiB7XHJcbiAgICAgICAgbG9nbzogXCJhc3NldHMvc3Zncy9jaGVjay11cC1yZWFzb24uc3ZnXCIsXHJcbiAgICAgICAga2V5OiBcImNoZWNrX3VwX3JlYXNvblwiXHJcbiAgICB9LFxyXG4gICAgXCJjb25zdWx0YXRpb25fZGV0YWlsc1wiOiB7XHJcbiAgICAgICAgbG9nbzogXCJhc3NldHMvc3Zncy9jb25zdWx0YXRpb24tZGV0YWlscy5zdmdcIixcclxuICAgICAgICBrZXk6IFwiY29uc3VsdGF0aW9uX2RldGFpbHNcIlxyXG4gICAgfSxcclxuICAgIFwibWVkaWNhbF9oaXN0b3J5XCI6IHtcclxuICAgICAgICBsb2dvOiBcImFzc2V0cy9zdmdzL21lZGljYWwtaGlzdG9yeS5zdmdcIixcclxuICAgICAgICBrZXk6IFwibWVkaWNhbF9oaXN0b3J5XCJcclxuICAgIH0sXHJcbiAgICBcInBoeXNpY2FsX2V4YW1pbmF0aW9uXCI6IHtcclxuICAgICAgICBsb2dvOiBcImFzc2V0cy9zdmdzL3BoeXNpY2FsLWV4YW1pbmF0aW9uLnN2Z1wiLFxyXG4gICAgICAgIGtleTogXCJwaHlzaWNhbF9leGFtaW5hdGlvblwiXHJcbiAgICB9LFxyXG4gICAgXCJyZWZlcl90b19zcGVjaWFsaXN0XCI6IHtcclxuICAgICAgICBsb2dvOiBcImFzc2V0cy9zdmdzL3JlZmVyLXNwZWNpYWxpc3Quc3ZnXCIsXHJcbiAgICAgICAga2V5OiBcInJlZmVyX3RvX3NwZWNpYWxpc3RcIlxyXG4gICAgfSxcclxuICAgIFwidml0YWxzXCI6IHtcclxuICAgICAgICBsb2dvOiBcImFzc2V0cy9zdmdzL3ZpdGFscy5zdmdcIixcclxuICAgICAgICBrZXk6IFwidml0YWxzXCJcclxuICAgIH0sXHJcbiAgICBcImRpYWdub3N0aWNzXCI6IHtcclxuICAgICAgICBsb2dvOiBcImFzc2V0cy9zdmdzL2RpYWdub3Npcy1ncmVlbi5zdmdcIixcclxuICAgICAgICBrZXk6IFwiZGlhZ25vc3RpY3NcIlxyXG4gICAgfSxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGNoZWNrSXNFbmFibGVkID0gKFxyXG4gICAga2V5OiBzdHJpbmcsXHJcbiAgICBpc19lbmFibGVkID0gZmFsc2UsXHJcbiAgICBvdGhlckZpZWxkczogYW55ID0ge31cclxuKSA9PiB7XHJcbiAgICAvLyBTZXQgZGVmYXVsdCBleHBhbmRlZCB2YWx1ZVxyXG4gICAgbGV0IGV4cGFuZGVkID0gdHJ1ZTtcclxuXHJcbiAgICAvLyBEZXN0cnVjdHVyZSBmcmVxdWVudGx5IHVzZWQgZmllbGRzIGZyb20gb3RoZXJGaWVsZHNcclxuICAgIGNvbnN0IHsgdmlzaXRFbmRlZCwgdmlzaXRDb21wbGV0ZWQsIHZpc2l0Tm90ZVByZXNlbnQsIGhhc1ZpdGFsc0VuYWJsZWQsIG5vdGVzX3NlY3Rpb24sIGF0dGFjaG1lbnRfc2VjdGlvbiB9ID0gb3RoZXJGaWVsZHM7XHJcblxyXG4gICAgc3dpdGNoIChrZXkpIHtcclxuICAgICAgICBjYXNlIFZJU0lUX1NFQ1RJT05TWydyZWZlcl90b19zcGVjaWFsaXN0J10ua2V5OlxyXG4gICAgICAgICAgICBpc19lbmFibGVkID0gaXNfZW5hYmxlZCAmJiAhdmlzaXRFbmRlZCAmJiAhdmlzaXRDb21wbGV0ZWQgJiYgIXZpc2l0Tm90ZVByZXNlbnQ7XHJcbiAgICAgICAgICAgIGV4cGFuZGVkID0gISF2aXNpdE5vdGVQcmVzZW50O1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSBWSVNJVF9TRUNUSU9OU1sndml0YWxzJ10ua2V5OlxyXG4gICAgICAgICAgICBpc19lbmFibGVkID0gaXNfZW5hYmxlZCAmJiAhIWhhc1ZpdGFsc0VuYWJsZWQ7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlIFZJU0lUX1NFQ1RJT05TWydhZGRpdGlvbmFsX25vdGVzJ10ua2V5OlxyXG4gICAgICAgICAgICBpc19lbmFibGVkID0gaXNfZW5hYmxlZCAmJiAhIW5vdGVzX3NlY3Rpb247XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlIFZJU0lUX1NFQ1RJT05TWydhZGRpdGlvbmFsX2RvY3VtZW50cyddLmtleTpcclxuICAgICAgICAgICAgaXNfZW5hYmxlZCA9IGlzX2VuYWJsZWQgJiYgISFhdHRhY2htZW50X3NlY3Rpb247XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlIFZJU0lUX1NFQ1RJT05TWydjb25zdWx0YXRpb25fZGV0YWlscyddLmtleTpcclxuICAgICAgICAgICAgaXNfZW5hYmxlZCA9IGlzX2VuYWJsZWQ7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlIFZJU0lUX1NFQ1RJT05TWydjaGVja191cF9yZWFzb24nXS5rZXk6XHJcbiAgICAgICAgICAgIGlzX2VuYWJsZWQgPSBpc19lbmFibGVkO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSBWSVNJVF9TRUNUSU9OU1snbWVkaWNhbF9oaXN0b3J5J10ua2V5OlxyXG4gICAgICAgICAgICBpc19lbmFibGVkID0gaXNfZW5hYmxlZDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgVklTSVRfU0VDVElPTlNbJ3BoeXNpY2FsX2V4YW1pbmF0aW9uJ10ua2V5OlxyXG4gICAgICAgICAgICBpc19lbmFibGVkID0gaXNfZW5hYmxlZDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAncGF0aWVudF9pbnRlcmFjdGlvbic6XHJcbiAgICAgICAgICAgIGlzX2VuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIC8vIEZvciBvdGhlciBzZWN0aW9ucywgcmV0dXJuIHRoZSBpbml0aWFsIGlzX2VuYWJsZWQgYW5kIGV4cGFuZGVkXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IGlzX2VuYWJsZWQsIGV4cGFuZGVkIH07XHJcbn07Il19