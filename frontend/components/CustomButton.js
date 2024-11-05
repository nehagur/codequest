const styles = StyleSheet.create({
    button: {
      height: 48,
      borderRadius: 8,
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 8,
    },
    primaryButton: {
      backgroundColor: COLORS.orange,      // Vibrant Orange for primary actions
      elevation: 2,
      shadowColor: COLORS.darkGray,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
    },
    secondaryButton: {
      backgroundColor: COLORS.white,
      borderWidth: 1,
      borderColor: COLORS.lightBlue,      // Light Blue for secondary button border
    },
    primaryButtonText: {
      color: COLORS.white,                // White text on primary buttons
    },
    secondaryButtonText: {
      color: COLORS.deepBlue,            // Deep Blue text on secondary buttons
    },
  });
  