## Setting Layout Component

The Setting Layout component provides a structured interface for managing various settings within an application. It organizes settings into tabs, allowing users to navigate between different sections such as account details, billing information, and authentication settings. This documentation outlines the structure, options, and examples for implementing the Setting Layout component.

### Structure

The Setting Layout component consists of two main sections: the navigation tabs and the content sections.

#### Navigation Tabs

The navigation tabs serve as the primary means of navigating between different settings sections. Each tab represents a distinct section of settings. The structure of a navigation tab includes:

- **Tab Container:** An outer container with the class `tabs setting`.
- **Title:** A title for the settings section, typically displayed at the top of the tab container.
- **Tab Buttons:** Buttons representing individual settings sections. Each button is associated with a content section and triggers the display of the corresponding content when clicked.

#### Content Sections

The content sections contain the actual settings and information related to each section. They are dynamically displayed based on the tab selected by the user. The structure of a content section includes:

- **Content Container:** An outer container with the attribute `nav-tb="data"`.
- **Individual Sections:** Each section corresponds to a tab button and contains specific settings or information. These sections are hidden by default and are displayed when their corresponding tab button is clicked.

### Options

The Setting Layout component supports various options for customization and functionality. These options can be applied to both the navigation tabs and the content sections.

#### Navigation Tab Options

1. **`tab-t` (Tab Target):** Specifies the target content section associated with the tab button.
2. **`tab-d` (Default Tab):** Indicates the default or initially opened tab.
3. **`nav-tb` (Navigation Tab):** Specifies the role of the tab container as a navigation tab.

#### Content Section Options

1. **`nav-tb-t` (Navigation Tab Target):** Associates the content section with its corresponding tab button.
2. **`nav-tb` (Navigation Tab):** Specifies the role of the content container as a data container.

### Examples

#### Basic Setting Layout

```html
<div class="settings">
    <!-- Navigation Tabs -->
    <div class="tabs setting" nav-tb="sidebar">
        <div class="h5 padding-cnt bold">Accounts Center</div>
        <button tab-t=".account" tab-d class="button tab">
            <div>Your Account</div>
        </button>
        <button tab-t=".billing" class="button tab">
            <div>Billing</div>
        </button>
        <button tab-t=".authentication" class="button tab">
            <div>Authentication</div>
        </button>
    </div>

    <!-- Content Sections -->
    <div nav-tb="data">
        <!-- Account Section -->
        <div class="account" nav-tb-t=".account">
            <div class="h2 bold" nav-tb="head">Your Account</div>
            <!-- Account settings content -->
        </div>

        <!-- Billing Section -->
        <div class="billing" nav-tb-t=".billing">
            <div class="h2 bold" nav-tb="head">Billing</div>
            <!-- Billing settings content -->
        </div>

        <!-- Authentication Section -->
        <div class="authentication" nav-tb-t=".authentication">
            <div class="h2 bold" nav-tb="head">Authentication</div>
            <!-- Authentication settings content -->
        </div>
    </div>
</div>
```

This example demonstrates a basic Setting Layout component with three tabs: "Your Account," "Billing," and "Authentication." Each tab is associated with a corresponding content section.

### Conclusion

The Setting Layout component provides a convenient and organized way to manage various settings within an application. By following the provided structure and options, developers can easily implement a customizable settings interface tailored to their application's requirements.
