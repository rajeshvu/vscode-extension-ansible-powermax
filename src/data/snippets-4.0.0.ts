import { SnippetItem } from "./snippets";

export const snippets_4_0_0: SnippetItem[] = [
    {
        "label": "Create storage group",
        "description": "- dellemc.powermax.storagegroup",
        "body": "- name: Create storage group\n  register: storage_group_details\n  dellemc.powermax.storagegroup:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ assigned_pool.serial_no }}'\n    sg_name: '{{ sg_name }}'\n    service_level: '{{ service_level }}'\n    srp: '{{ assigned_pool.storage_pool }}'\n    compression: true\n    state: present\n"
    },
    {
        "label": "Create volumes",
        "description": "- dellemc.powermax.volume",
        "body": "- name: Create volumes\n  dellemc.powermax.volume:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ assigned_pool.serial_no }}'\n    vol_name: '{{ vol_name + ''_'' }}{{ item }}'\n    sg_name: '{{ sg_name }}'\n    size: '{{ (size / vol_count) | int | abs }}'\n    cap_unit: '{{ cap_unit }}'\n    state: present\n  loop: '{{ range(0, vol_count, 1) | list }}'\n"
    },
    {
        "label": "Create host with host_type 'default'",
        "description": "- dellemc.powermax.host",
        "body": "- name: Create host with host_type 'default'\n  dellemc.powermax.host:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ serial_no }}'\n    host_name: '{{ host_name_1 }}'\n    host_type: default\n    state: present\n"
    },
    {
        "label": "Create host with host_type 'hpux'",
        "description": "- dellemc.powermax.host",
        "body": "- name: Create host with host_type 'hpux'\n  dellemc.powermax.host:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ serial_no }}'\n    host_name: '{{ host_name_2 }}'\n    host_type: hpux\n    state: present\n"
    },
    {
        "label": "Create host with host_flags",
        "description": "- dellemc.powermax.host",
        "body": "- name: Create host with host_flags\n  dellemc.powermax.host:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ serial_no }}'\n    host_name: '{{ host_name }}'\n    initiators:\n    - id: 10000090fa6622a5\n    - alias: test/host\n    host_flags:\n      spc2_protocol_version: true\n      consistent_lun: true\n      volume_set_addressing: unset\n      disable_q_reset_on_ua: false\n      openvms: unset\n    state: present\n    initiator_state: present-in-host\n"
    },
    {
        "label": "Get host details",
        "description": "- dellemc.powermax.host",
        "body": "- name: Get host details\n  dellemc.powermax.host:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ serial_no }}'\n    host_name: '{{ host_name }}'\n    state: present\n"
    },
    {
        "label": "Adding initiator to host",
        "description": "- dellemc.powermax.host",
        "body": "- name: Adding initiator to host\n  dellemc.powermax.host:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ serial_no }}'\n    host_name: '{{ host_name }}'\n    initiators:\n    - 10000000c9dbdf9f\n    - a/b\n    initiator_state: present-in-host\n    state: present\n"
    },
    {
        "label": "Removing initiator from host",
        "description": "- dellemc.powermax.host",
        "body": "- name: Removing initiator from host\n  dellemc.powermax.host:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ serial_no }}'\n    host_name: '{{ host_name }}'\n    initiators:\n    - 20000025b551ff2b\n    - a/b\n    initiator_state: absent-in-host\n    state: present\n"
    },
    {
        "label": "Modify flags of host using host_type",
        "description": "- dellemc.powermax.host",
        "body": "- name: Modify flags of host using host_type\n  dellemc.powermax.host:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ serial_no }}'\n    host_name: '{{ host_name }}'\n    host_type: hpux\n    state: present\n"
    },
    {
        "label": "Modify flags of host using host_flag",
        "description": "- dellemc.powermax.host",
        "body": "- name: Modify flags of host using host_flag\n  dellemc.powermax.host:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ serial_no }}'\n    host_name: '{{ host_name }}'\n    host_flags:\n      spc2_protocol_version: unset\n      consistent_lun: unset\n      volume_set_addressing: true\n      disable_q_reset_on_ua: false\n      openvms: false\n      avoid_reset_broadcast: true\n    state: present\n"
    },
    {
        "label": "Rename host",
        "description": "- dellemc.powermax.host",
        "body": "- name: Rename host\n  dellemc.powermax.host:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ serial_no }}'\n    host_name: '{{ host_name }}'\n    new_name: '{{ new_host_name }}'\n    state: present\n"
    },
    {
        "label": "Delete host",
        "description": "- dellemc.powermax.host",
        "body": "- name: Delete host\n  dellemc.powermax.host:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ serial_no }}'\n    host_name: '{{ new_host_name }}'\n    state: absent\n"
    },
    {
        "label": "Create host group with host_type 'default'",
        "description": "- dellemc.powermax.hostgroup",
        "body": "- name: Create host group with host_type 'default'\n  dellemc.powermax.hostgroup:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ serial_no }}'\n    hostgroup_name: '{{ hostgroup_name_1 }}'\n    hosts:\n    - Ansible_Test_host_1\n    state: present\n    host_state: present-in-group\n    host_type: default\n"
    },
    {
        "label": "Create host group with host_type 'hpux'",
        "description": "- dellemc.powermax.hostgroup",
        "body": "- name: Create host group with host_type 'hpux'\n  dellemc.powermax.hostgroup:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ serial_no }}'\n    hostgroup_name: '{{ hostgroup_name_2 }}'\n    hosts:\n    - Ansible_Test_host_2\n    state: present\n    host_state: present-in-group\n    host_type: hpux\n"
    },
    {
        "label": "Create host group with host_flags",
        "description": "- dellemc.powermax.hostgroup",
        "body": "- name: Create host group with host_flags\n  dellemc.powermax.hostgroup:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ serial_no }}'\n    hostgroup_name: '{{ hostgroup_name }}'\n    hosts:\n    - Ansible_Test_host\n    state: present\n    host_state: present-in-group\n    host_flags:\n      spc2_protocol_version: 'true'\n      consistent_lun: false\n      disable_q_reset_on_ua: 'false'\n      openvms: unset\n"
    },
    {
        "label": "Get host group details",
        "description": "- dellemc.powermax.hostgroup",
        "body": "- name: Get host group details\n  dellemc.powermax.hostgroup:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ serial_no }}'\n    hostgroup_name: '{{ hostgroup_name }}'\n    state: present\n"
    },
    {
        "label": "Adding host to host group",
        "description": "- dellemc.powermax.hostgroup",
        "body": "- name: Adding host to host group\n  dellemc.powermax.hostgroup:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ serial_no }}'\n    hostgroup_name: '{{ hostgroup_name }}'\n    hosts:\n    - Ansible_Test_host2\n    state: present\n    host_state: present-in-group\n"
    },
    {
        "label": "Removing host from host group",
        "description": "- dellemc.powermax.hostgroup",
        "body": "- name: Removing host from host group\n  dellemc.powermax.hostgroup:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ serial_no }}'\n    hostgroup_name: '{{ hostgroup_name }}'\n    hosts:\n    - Ansible_Test_host2\n    state: present\n    host_state: absent-in-group\n"
    },
    {
        "label": "Modify flags of host group using host_type",
        "description": "- dellemc.powermax.hostgroup",
        "body": "- name: Modify flags of host group using host_type\n  dellemc.powermax.hostgroup:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ serial_no }}'\n    hostgroup_name: '{{ hostgroup_name }}'\n    host_type: default\n    state: present\n"
    },
    {
        "label": "Modify flags of host group using host_flags",
        "description": "- dellemc.powermax.hostgroup",
        "body": "- name: Modify flags of host group using host_flags\n  dellemc.powermax.hostgroup:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ serial_no }}'\n    hostgroup_name: '{{ hostgroup_name }}'\n    host_flags:\n      spc2_protocol_version: Unset\n      disable_q_reset_on_ua: 'False'\n      openvms: false\n      avoid_reset_broadcast: 'True'\n    state: present\n"
    },
    {
        "label": "Rename host group",
        "description": "- dellemc.powermax.hostgroup",
        "body": "- name: Rename host group\n  dellemc.powermax.hostgroup:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ serial_no }}'\n    hostgroup_name: '{{ hostgroup_name }}'\n    new_name: Ansible_Testing_hostgroup2\n    state: present\n"
    },
    {
        "label": "Delete host group",
        "description": "- dellemc.powermax.hostgroup",
        "body": "- name: Delete host group\n  dellemc.powermax.hostgroup:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ serial_no }}'\n    hostgroup_name: Ansible_Testing_hostgroup2\n    state: absent\n"
    },
    {
        "label": "Get subset facts for a given PowerMax/Vmax Storage System",
        "description": "- dellemc.powermax.info",
        "body": "- name: Get subset facts for a given PowerMax/Vmax Storage System\n  dellemc.powermax.info:\n    unispherehost: '{{ unispherehost }}'\n    serial_no: '{{ serial_no }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    gather_subset:\n    - alert\n    - health\n    - vol\n    - sg\n    - pg\n    - srp\n    - host\n    - hg\n    - port\n    - mv\n    - mv_connections\n    - rdf\n    - metro_dr_env\n    - snapshot_policies\n  register: subset_result\n"
    },
    {
        "label": "Get list of volumes with filter -- all TDEV volumes of size equal to 5GB",
        "description": "- dellemc.powermax.info",
        "body": "- name: Get list of volumes with filter -- all TDEV volumes of size equal to 5GB\n  dellemc.powermax.info:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ serial_no }}'\n    gather_subset:\n    - vol\n    filters:\n    - filter_key: tdev\n      filter_operator: equal\n      filter_value: 'True'\n    - filter_key: cap_gb\n      filter_operator: equal\n      filter_value: '5'\n"
    },
    {
        "label": "Get list of volumes and storage group with filter",
        "description": "- dellemc.powermax.info",
        "body": "- name: Get list of volumes and storage group with filter\n  dellemc.powermax.info:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ serial_no }}'\n    gather_subset:\n    - vol\n    - sg\n    filters:\n    - filter_key: tdev\n      filter_operator: equal\n      filter_value: 'True'\n    - filter_key: cap_gb\n      filter_operator: equal\n      filter_value: '5'\n"
    },
    {
        "label": "Get list of storage group with capacity between 2GB to 10GB",
        "description": "- dellemc.powermax.info",
        "body": "- name: Get list of storage group with capacity between 2GB to 10GB\n  dellemc.powermax.info:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ serial_no }}'\n    gather_subset:\n    - sg\n    filters:\n    - filter_key: cap_gb\n      filter_operator: greater\n      filter_value: '2'\n    - filter_key: cap_gb\n      filter_operator: lesser\n      filter_value: '10'\n"
    },
    {
        "label": "Get the list of arrays for a given Unisphere host and register",
        "description": "- dellemc.powermax.info",
        "body": "- name: Get the list of arrays for a given Unisphere host and register\n  dellemc.powermax.info:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n  register: array_list\n"
    },
    {
        "label": "Get the list of metro DR environments for a given Unisphere host",
        "description": "- dellemc.powermax.info",
        "body": "- name: Get the list of metro DR environments for a given Unisphere host\n  dellemc.powermax.info:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ serial_no }}'\n    gather_subset:\n    - metro_dr_env\n"
    },
    {
        "label": "Get list of tdev-volumes",
        "description": "- dellemc.powermax.info",
        "body": "- name: Get list of tdev-volumes\n  dellemc.powermax.info:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ serial_no }}'\n    tdev_volumes: '{{ tdev_volumes }}'\n    gather_subset:\n    - vol\n"
    },
    {
        "label": "Get the list of arrays for a given Unisphere host",
        "description": "- dellemc.powermax.info",
        "body": "- name: Get the list of arrays for a given Unisphere host\n  dellemc.powermax.info:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n"
    },
    {
        "label": "Get array health status",
        "description": "- dellemc.powermax.info",
        "body": "- name: Get array health status\n  dellemc.powermax.info:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ serial_no }}'\n    gather_subset:\n    - health\n"
    },
    {
        "label": "Get array alert summary",
        "description": "- dellemc.powermax.info",
        "body": "- name: Get array alert summary\n  dellemc.powermax.info:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ serial_no }}'\n    gather_subset:\n    - alert\n"
    },
    {
        "label": "Get list of Storage groups",
        "description": "- dellemc.powermax.info",
        "body": "- name: Get list of Storage groups\n  dellemc.powermax.info:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ serial_no }}'\n    gather_subset:\n    - sg\n"
    },
    {
        "label": "Get list of Storage Resource Pools",
        "description": "- dellemc.powermax.info",
        "body": "- name: Get list of Storage Resource Pools\n  dellemc.powermax.info:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ serial_no }}'\n    gather_subset:\n    - srp\n"
    },
    {
        "label": "Get list of Ports",
        "description": "- dellemc.powermax.info",
        "body": "- name: Get list of Ports\n  dellemc.powermax.info:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ serial_no }}'\n    gather_subset:\n    - port\n"
    },
    {
        "label": "Get list of Port Groups",
        "description": "- dellemc.powermax.info",
        "body": "- name: Get list of Port Groups\n  dellemc.powermax.info:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ serial_no }}'\n    gather_subset:\n    - pg\n"
    },
    {
        "label": "Get list of Hosts",
        "description": "- dellemc.powermax.info",
        "body": "- name: Get list of Hosts\n  dellemc.powermax.info:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ serial_no }}'\n    gather_subset:\n    - host\n"
    },
    {
        "label": "Get list of Host Groups",
        "description": "- dellemc.powermax.info",
        "body": "- name: Get list of Host Groups\n  dellemc.powermax.info:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ serial_no }}'\n    gather_subset:\n    - hg\n"
    },
    {
        "label": "Get list of Masking Views",
        "description": "- dellemc.powermax.info",
        "body": "- name: Get list of Masking Views\n  dellemc.powermax.info:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ serial_no }}'\n    gather_subset:\n    - mv\n"
    },
    {
        "label": "Get list of RDF Groups",
        "description": "- dellemc.powermax.info",
        "body": "- name: Get list of RDF Groups\n  dellemc.powermax.info:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ serial_no }}'\n    gather_subset:\n    - rdf\n"
    },
    {
        "label": "Get list of snapshot policies",
        "description": "- dellemc.powermax.info",
        "body": "- name: Get list of snapshot policies\n  dellemc.powermax.info:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ serial_no }}'\n    gather_subset:\n    - snapshot_policies\n"
    },
    {
        "label": "Get list of Initiators",
        "description": "- dellemc.powermax.info",
        "body": "- name: Get list of Initiators\n  dellemc.powermax.info:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ serial_no }}'\n    gather_subset:\n    - initiators\n"
    },
    {
        "label": "Get list of masking view connections with filter",
        "description": "- dellemc.powermax.info",
        "body": "- name: Get list of masking view connections with filter\n  dellemc.powermax.info:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ serial_no }}'\n    gather_subset:\n    - mv_connections\n    filters:\n    - filter_key: logged_in\n      filter_operator: equal\n      filter_value: 'True'\n    - filter_key: cap_gb\n      filter_operator: equal\n      filter_value: '10'\n"
    },
    {
        "label": "Get initiator details",
        "description": "- dellemc.powermax.initiator",
        "body": "- name: Get initiator details\n  dellemc.powermax.initiator:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ serial_no }}'\n    initiator_id: 10000000c9959b8e\n    state: present\n"
    },
    {
        "label": "Get initiator details using alias",
        "description": "- dellemc.powermax.initiator",
        "body": "- name: Get initiator details using alias\n  dellemc.powermax.initiator:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ serial_no }}'\n    alias: test/host\n    state: present\n"
    },
    {
        "label": "Rename initiator alias",
        "description": "- dellemc.powermax.initiator",
        "body": "- name: Rename initiator alias\n  dellemc.powermax.initiator:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ serial_no }}'\n    initiator_id: 10000000c9959b8e\n    new_alias:\n      new_node_name: test\n      new_port_name: host_new\n    state: present\n"
    },
    {
        "label": "Get job details",
        "description": "- dellemc.powermax.job",
        "body": "- name: Get job details\n  dellemc.powermax.job:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    job_id: '1609765491463'\n"
    },
    {
        "label": "Create MV with hostgroup",
        "description": "- dellemc.powermax.maskingview",
        "body": "- name: Create MV with hostgroup\n  dellemc.powermax.maskingview:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ serial_no }}'\n    mv_name: '{{ mv_name }}'\n    portgroup_name: 1024739167_415_PG\n    hostgroup_name: 102473945_415_IG\n    sg_name: fakehostlssemccom_415_CSG\n    state: present\n"
    },
    {
        "label": "Rename hostgroup masking view",
        "description": "- dellemc.powermax.maskingview",
        "body": "- name: Rename hostgroup masking view\n  dellemc.powermax.maskingview:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ serial_no }}'\n    mv_name: '{{ mv_name }}'\n    new_mv_name: Ansible_Testing_mv_renamed\n    state: present\n"
    },
    {
        "label": "Delete hostgroup masking view",
        "description": "- dellemc.powermax.maskingview",
        "body": "- name: Delete hostgroup masking view\n  dellemc.powermax.maskingview:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ serial_no }}'\n    mv_name: Ansible_Testing_mv_renamed\n    state: absent\n"
    },
    {
        "label": "Create MV with host",
        "description": "- dellemc.powermax.maskingview",
        "body": "- name: Create MV with host\n  dellemc.powermax.maskingview:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ serial_no }}'\n    mv_name: ansible_testing_host_mv\n    portgroup_name: portgroup-31933\n    host_name: fake_host\n    sg_name: 1024739118_415_CSG\n    state: present\n"
    },
    {
        "label": "Delete host masking view",
        "description": "- dellemc.powermax.maskingview",
        "body": "- name: Delete host masking view\n  dellemc.powermax.maskingview:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ serial_no }}'\n    mv_name: ansible_testing_host_mv\n    state: absent\n"
    },
    {
        "label": "Create a new Storage group - prereq",
        "description": "- dellemc.powermax.storagegroup",
        "body": "- name: Create a new Storage group - prereq\n  dellemc.powermax.storagegroup:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ metro_r1_array_id }}'\n    sg_name: '{{ sg_name }}'\n    service_level: Diamond\n    srp: SRP_1\n    compression: true\n    state: present\n"
    },
    {
        "label": "Create a volume - prereq",
        "description": "- dellemc.powermax.volume",
        "body": "- name: Create a volume - prereq\n  register: volume_details\n  dellemc.powermax.volume:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ metro_r1_array_id }}'\n    vol_name: '{{ vol_name }}'\n    sg_name: '{{ sg_name }}'\n    size: 1\n    cap_unit: GB\n    state: present\n"
    },
    {
        "label": "Create metrodr env",
        "description": "- dellemc.powermax.metrodr",
        "body": "- name: Create metrodr env\n  dellemc.powermax.metrodr:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    metro_r1_array_id: '{{ metro_r1_array_id }}'\n    metro_r2_array_id: '{{ metro_r2_array_id }}'\n    dr_array_id: '{{ dr_array_id }}'\n    sg_name: '{{ sg_name }}'\n    env_name: '{{ env_name }}'\n    replication_mode: Asynchronous\n    wait_for_completion: true\n    state: present\n"
    },
    {
        "label": "Modify metrodr env",
        "description": "- dellemc.powermax.metrodr",
        "body": "- name: Modify metrodr env\n  dellemc.powermax.metrodr:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    metro_r1_array_id: '{{ metro_r1_array_id }}'\n    env_name: '{{ env_name }}'\n    srdf_param:\n      srdf_state: Suspend\n      metro: true\n      dr: true\n    replication_mode: Adaptive Copy\n    wait_for_completion: true\n    state: present\n"
    },
    {
        "label": "Delete metrodr env",
        "description": "- dellemc.powermax.metrodr",
        "body": "- name: Delete metrodr env\n  dellemc.powermax.metrodr:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    metro_r1_array_id: '{{ metro_r1_array_id }}'\n    env_name: '{{ env_name }}'\n    state: absent\n"
    },
    {
        "label": "Convert sg to metrodr env",
        "description": "- dellemc.powermax.metrodr",
        "body": "- name: Convert sg to metrodr env\n  dellemc.powermax.metrodr:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    metro_r1_array_id: '{{ metro_r1_array_id }}'\n    metro_r2_array_id: '{{ metro_r2_array_id }}'\n    dr_array_id: '{{ dr_array_id }}'\n    sg_name: '{{ sg_name }}'\n    env_name: '{{ env_name }}'\n    wait_for_completion: true\n    state: present\n"
    },
    {
        "label": "Delete SRDF link from m1 - cleanup",
        "description": "- dellemc.powermax.srdf",
        "body": "- name: Delete SRDF link from m1 - cleanup\n  dellemc.powermax.srdf:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ metro_r1_array_id }}'\n    sg_name: '{{ sg_name }}'\n    state: absent\n"
    },
    {
        "label": "Delete SRDF link from m2 - cleanup",
        "description": "- dellemc.powermax.srdf",
        "body": "- name: Delete SRDF link from m2 - cleanup\n  dellemc.powermax.srdf:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ metro_r2_array_id }}'\n    sg_name: '{{ sg_name }}'\n    state: absent\n"
    },
    {
        "label": "Delete SRDF link from dr - cleanup",
        "description": "- dellemc.powermax.srdf",
        "body": "- name: Delete SRDF link from dr - cleanup\n  dellemc.powermax.srdf:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ dr_array_id }}'\n    sg_name: '{{ sg_name }}'\n    state: absent\n"
    },
    {
        "label": "Remove volumes from SG - m1 - cleanup",
        "description": "- dellemc.powermax.storagegroup",
        "body": "- name: Remove volumes from SG - m1 - cleanup\n  dellemc.powermax.storagegroup:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ metro_r1_array_id }}'\n    sg_name: '{{ sg_name }}'\n    state: present\n    volumes:\n    - vol_id: '{{ volume_details.volume_details.volumeId }}'\n    vol_state: absent-in-group\n"
    },
    {
        "label": "Remove volumes from SG - m2 - cleanup",
        "description": "- dellemc.powermax.storagegroup",
        "body": "- name: Remove volumes from SG - m2 - cleanup\n  dellemc.powermax.storagegroup:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ metro_r2_array_id }}'\n    sg_name: '{{ sg_name }}'\n    state: present\n    volumes:\n    - vol_id: '{{ volume_details.volume_details.volumeId }}'\n    vol_state: absent-in-group\n"
    },
    {
        "label": "Remove volumes from SG - dr - cleanup",
        "description": "- dellemc.powermax.storagegroup",
        "body": "- name: Remove volumes from SG - dr - cleanup\n  dellemc.powermax.storagegroup:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ dr_array_id }}'\n    sg_name: '{{ sg_name }}'\n    state: present\n    volumes:\n    - vol_id: '{{ volume_details.volume_details.volumeId }}'\n    vol_state: absent-in-group\n"
    },
    {
        "label": "Delete volume - m1 - cleanup",
        "description": "- dellemc.powermax.volume",
        "body": "- name: Delete volume - m1 - cleanup\n  dellemc.powermax.volume:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ metro_r1_array_id }}'\n    sg_name: '{{ sg_name }}'\n    vol_id: '{{ volume_details.volume_details.volumeId }}'\n    state: absent\n"
    },
    {
        "label": "Delete volume - m2 - cleanup",
        "description": "- dellemc.powermax.volume",
        "body": "- name: Delete volume - m2 - cleanup\n  dellemc.powermax.volume:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ metro_r2_array_id }}'\n    sg_name: '{{ sg_name }}'\n    vol_id: '{{ volume_details.volume_details.volumeId }}'\n    state: absent\n"
    },
    {
        "label": "Delete volume - dr - cleanup",
        "description": "- dellemc.powermax.volume",
        "body": "- name: Delete volume - dr - cleanup\n  dellemc.powermax.volume:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ dr_array_id }}'\n    sg_name: '{{ sg_name }}'\n    vol_id: '{{ volume_details.volume_details.volumeId }}'\n    state: absent\n"
    },
    {
        "label": "Delete SG from m1 array - cleanup",
        "description": "- dellemc.powermax.storagegroup",
        "body": "- name: Delete SG from m1 array - cleanup\n  dellemc.powermax.storagegroup:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ metro_r1_array_id }}'\n    sg_name: '{{ sg_name }}'\n    state: absent\n"
    },
    {
        "label": "Delete SG from m2 array - cleanup",
        "description": "- dellemc.powermax.storagegroup",
        "body": "- name: Delete SG from m2 array - cleanup\n  dellemc.powermax.storagegroup:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ metro_r2_array_id }}'\n    sg_name: '{{ sg_name }}'\n    state: absent\n"
    },
    {
        "label": "Delete SG from dr array - cleanup",
        "description": "- dellemc.powermax.storagegroup",
        "body": "- name: Delete SG from dr array - cleanup\n  dellemc.powermax.storagegroup:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ dr_array_id }}'\n    sg_name: '{{ sg_name }}'\n    state: absent\n"
    },
    {
        "label": "Get details of single/multiple ports",
        "description": "- dellemc.powermax.port",
        "body": "- name: Get details of single/multiple ports\n  dellemc.powermax.port:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ array_id }}'\n    ports:\n    - director_id: FA-1D\n      port_id: '35'\n    - director_id: FA-2D\n      port_id: '10'\n"
    },
    {
        "label": "Create port group",
        "description": "- dellemc.powermax.portgroup",
        "body": "- name: Create port group\n  dellemc.powermax.portgroup:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ array_id }}'\n    portgroup_name: '{{ portgroup_name }}'\n    state: present\n"
    },
    {
        "label": "Add port to port group",
        "description": "- dellemc.powermax.portgroup",
        "body": "- name: Add port to port group\n  dellemc.powermax.portgroup:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ array_id }}'\n    portgroup_name: '{{ portgroup_name }}'\n    state: present\n    ports:\n    - director_id: FA-1D\n      port_id: '9'\n    - director_id: FA-2D\n      port_id: '9'\n    port_state: present-in-group\n"
    },
    {
        "label": "Remove port from port group",
        "description": "- dellemc.powermax.portgroup",
        "body": "- name: Remove port from port group\n  dellemc.powermax.portgroup:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ array_id }}'\n    portgroup_name: '{{ portgroup_name }}'\n    state: present\n    ports:\n    - director_id: FA-1D\n      port_id: '9'\n    - director_id: FA-2D\n      port_id: '9'\n    port_state: absent-in-group\n"
    },
    {
        "label": "Modify port group",
        "description": "- dellemc.powermax.portgroup",
        "body": "- name: Modify port group\n  dellemc.powermax.portgroup:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ array_id }}'\n    portgroup_name: '{{ portgroup_name }}'\n    new_name: '{{ new_name }}'\n    state: present\n"
    },
    {
        "label": "Delete port group after re-name",
        "description": "- dellemc.powermax.portgroup",
        "body": "- name: Delete port group after re-name\n  dellemc.powermax.portgroup:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ array_id }}'\n    portgroup_name: '{{ new_name }}'\n    state: absent\n"
    },
    {
        "label": "Create PG with ports",
        "description": "- dellemc.powermax.portgroup",
        "body": "- name: Create PG with ports\n  dellemc.powermax.portgroup:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ array_id }}'\n    portgroup_name: '{{ portgroup_name }}'\n    state: present\n    ports:\n    - director_id: FA-1D\n      port_id: '9'\n    - director_id: FA-2D\n      port_id: '10'\n    port_state: present-in-group\n"
    },
    {
        "label": "Delete port group",
        "description": "- dellemc.powermax.portgroup",
        "body": "- name: Delete port group\n  dellemc.powermax.portgroup:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ array_id }}'\n    portgroup_name: '{{ portgroup_name }}'\n    state: absent\n"
    },
    {
        "label": "Get RDF Group detail and Volumes",
        "description": "- dellemc.powermax.rdfgroup",
        "body": "- name: Get RDF Group detail and Volumes\n  dellemc.powermax.rdfgroup:\n    unispherehost: '{{ unispherehost }}'\n    serial_no: '{{ serial_no }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    rdfgroup_number: '{{ rdfgroup_number }}'\n"
    },
    {
        "label": "Get specific volume details of an RDF Group",
        "description": "- dellemc.powermax.rdfgroup",
        "body": "- name: Get specific volume details of an RDF Group\n  dellemc.powermax.rdfgroup:\n    unispherehost: '{{ unispherehost }}'\n    serial_no: '{{ serial_no }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    rdfgroup_number: '{{ rdfgroup_number }}'\n    vol_name: 00039\n"
    },
    {
        "label": "Create a storage group Snapshot with TTL",
        "description": "- dellemc.powermax.snapshot",
        "body": "- name: Create a storage group Snapshot with TTL\n  dellemc.powermax.snapshot:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ serial_no }}'\n    sg_name: '{{ sg_name }}'\n    ttl: '{{ ttl }}'\n    ttl_unit: '{{ ttl_unit_days }}'\n    snapshot_name: '{{ snapshot_name }}'\n    state: '{{ state_present }}'\n"
    },
    {
        "label": "Get Storage Group Snapshot details",
        "description": "- dellemc.powermax.snapshot",
        "body": "- name: Get Storage Group Snapshot details\n  dellemc.powermax.snapshot:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ serial_no }}'\n    sg_name: '{{ sg_name }}'\n    snapshot_name: '{{ snapshot_name }}'\n    state: '{{ state_present }}'\n"
    },
    {
        "label": "Get Storage Group Snapshot details using generation",
        "description": "- dellemc.powermax.snapshot",
        "body": "- name: Get Storage Group Snapshot details using generation\n  dellemc.powermax.snapshot:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ serial_no }}'\n    sg_name: '{{ sg_name }}'\n    snapshot_name: '{{ snapshot_name }}'\n    generation: '{{ generation_1 }}'\n    state: '{{ state_present }}'\n"
    },
    {
        "label": "Get Storage Group Snapshot details using snapshot_id",
        "description": "- dellemc.powermax.snapshot",
        "body": "- name: Get Storage Group Snapshot details using snapshot_id\n  dellemc.powermax.snapshot:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ serial_no }}'\n    sg_name: '{{ sg_name }}'\n    snapshot_name: '{{ snapshot_name }}'\n    snapshot_id: '{{ snapshot_id_1 }}'\n    state: '{{ state_present }}'\n"
    },
    {
        "label": "Change SG Snapshot Link Status to Linked using generation",
        "description": "- dellemc.powermax.snapshot",
        "body": "- name: Change SG Snapshot Link Status to Linked using generation\n  dellemc.powermax.snapshot:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ serial_no }}'\n    sg_name: '{{ sg_name }}'\n    snapshot_name: '{{ snapshot_name }}'\n    target_sg_name: '{{ target_sg_name }}'\n    link_status: '{{ link_status_linked }}'\n    generation: '{{ generation }}'\n    state: '{{ state_present }}'\n"
    },
    {
        "label": "Change SG Snapshot Link Status to UnLinked using generation",
        "description": "- dellemc.powermax.snapshot",
        "body": "- name: Change SG Snapshot Link Status to UnLinked using generation\n  dellemc.powermax.snapshot:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ serial_no }}'\n    sg_name: '{{ sg_name }}'\n    snapshot_name: '{{ snapshot_name }}'\n    target_sg_name: '{{ target_sg_name }}'\n    link_status: '{{ link_status_unlinked }}'\n    generation: '{{ generation }}'\n    state: '{{ state_present }}'\n"
    },
    {
        "label": "Change SG Snapshot Link Status to Linked using snapshot_id",
        "description": "- dellemc.powermax.snapshot",
        "body": "- name: Change SG Snapshot Link Status to Linked using snapshot_id\n  dellemc.powermax.snapshot:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ serial_no }}'\n    sg_name: '{{ sg_name }}'\n    snapshot_name: '{{ snapshot_name }}'\n    target_sg_name: '{{ target_sg_name }}'\n    link_status: '{{ link_status_linked }}'\n    snapshot_id: '{{ snapshot_id }}'\n    state: '{{ state_present }}'\n"
    },
    {
        "label": "Change SG Snapshot Link Status to UnLinked using snapshot_id",
        "description": "- dellemc.powermax.snapshot",
        "body": "- name: Change SG Snapshot Link Status to UnLinked using snapshot_id\n  dellemc.powermax.snapshot:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ serial_no }}'\n    sg_name: '{{ sg_name }}'\n    snapshot_name: '{{ snapshot_name }}'\n    target_sg_name: '{{ target_sg_name }}'\n    link_status: '{{ link_status_unlinked }}'\n    snapshot_id: '{{ snapshot_id }}'\n    state: '{{ state_present }}'\n"
    },
    {
        "label": "Rename Storage Group Snapshot using generation",
        "description": "- dellemc.powermax.snapshot",
        "body": "- name: Rename Storage Group Snapshot using generation\n  dellemc.powermax.snapshot:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ serial_no }}'\n    sg_name: '{{ sg_name }}'\n    snapshot_name: '{{ snapshot_name }}'\n    new_snapshot_name: '{{ new_snapshot_name }}'\n    generation: '{{ generation }}'\n    state: '{{ state_present }}'\n"
    },
    {
        "label": "Rename Storage Group Snapshot using snapshot_id",
        "description": "- dellemc.powermax.snapshot",
        "body": "- name: Rename Storage Group Snapshot using snapshot_id\n  dellemc.powermax.snapshot:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ serial_no }}'\n    sg_name: '{{ sg_name }}'\n    snapshot_name: '{{ snapshot_name }}'\n    new_snapshot_name: '{{ new_snapshot_name }}'\n    snapshot_id: '{{ snapshot_id }}'\n    state: '{{ state_present }}'\n"
    },
    {
        "label": "Restore Storage Group Snapshot using generation",
        "description": "- dellemc.powermax.snapshot",
        "body": "- name: Restore Storage Group Snapshot using generation\n  dellemc.powermax.snapshot:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ serial_no }}'\n    sg_name: '{{ sg_name }}'\n    snapshot_name: '{{ snapshot_name }}'\n    restore: true\n    generation: '{{ generation }}'\n    state: '{{ state_present }}'\n"
    },
    {
        "label": "Restore Storage Group Snapshot using snapshot_id",
        "description": "- dellemc.powermax.snapshot",
        "body": "- name: Restore Storage Group Snapshot using snapshot_id\n  dellemc.powermax.snapshot:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ serial_no }}'\n    sg_name: '{{ sg_name }}'\n    snapshot_name: '{{ snapshot_name }}'\n    restore: true\n    snapshot_id: '{{ snapshot_id }}'\n    state: '{{ state_present }}'\n"
    },
    {
        "label": "Delete Storage Group Snapshot using generation",
        "description": "- dellemc.powermax.snapshot",
        "body": "- name: Delete Storage Group Snapshot using generation\n  dellemc.powermax.snapshot:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ serial_no }}'\n    sg_name: '{{ sg_name }}'\n    snapshot_name: '{{ snapshot_name }}'\n    generation: '{{ generation_1 }}'\n    state: '{{ state_absent }}'\n"
    },
    {
        "label": "Delete Storage Group Snapshot using snapshot_id",
        "description": "- dellemc.powermax.snapshot",
        "body": "- name: Delete Storage Group Snapshot using snapshot_id\n  dellemc.powermax.snapshot:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ serial_no }}'\n    sg_name: '{{ sg_name }}'\n    snapshot_name: '{{ snapshot_name }}'\n    snapshot_id: '{{ snapshot_id_1 }}'\n    state: '{{ state_absent }}'\n"
    },
    {
        "label": "Create a snapshot policy",
        "description": "- dellemc.powermax.snapshotpolicy",
        "body": "- name: Create a snapshot policy\n  dellemc.powermax.snapshotpolicy:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ serial_no }}'\n    snapshot_policy_name: 10min_policy_1\n    interval: 10 Minutes\n    secure: false\n    snapshot_count: 10\n    offset_mins: 2\n    compliance_count_warning: 6\n    compliance_count_critical: 4\n    state: present\n"
    },
    {
        "label": "Create a snapshot policy and associate storgae groups to it",
        "description": "- dellemc.powermax.snapshotpolicy",
        "body": "- name: Create a snapshot policy and associate storgae groups to it\n  dellemc.powermax.snapshotpolicy:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ serial_no }}'\n    snapshot_policy_name: 10min_policy_2\n    interval: 10 Minutes\n    secure: false\n    snapshot_count: 12\n    offset_mins: 5\n    compliance_count_warning: 8\n    compliance_count_critical: 4\n    storage_groups:\n    - 11_ansible_test_1\n    - 11_ansible_test_2\n    storage_group_state: present-in-policy\n    state: present\n"
    },
    {
        "label": "Get snapshot policy details",
        "description": "- dellemc.powermax.snapshotpolicy",
        "body": "- name: Get snapshot policy details\n  dellemc.powermax.snapshotpolicy:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ serial_no }}'\n    snapshot_policy_name: 10min_policy_2\n    state: present\n"
    },
    {
        "label": "Modify snapshot policy attributes",
        "description": "- dellemc.powermax.snapshotpolicy",
        "body": "- name: Modify snapshot policy attributes\n  dellemc.powermax.snapshotpolicy:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ serial_no }}'\n    snapshot_policy_name: 10min_policy_2\n    new_snapshot_policy_name: 10min_policy_2_new\n    interval: 10 Minutes\n    snapshot_count: 16\n    offset_mins: 8\n    compliance_count_warning: 9\n    compliance_count_critical: 7\n    state: present\n"
    },
    {
        "label": "Modify snapshot policy, associate to storage groups",
        "description": "- dellemc.powermax.snapshotpolicy",
        "body": "- name: Modify snapshot policy, associate to storage groups\n  dellemc.powermax.snapshotpolicy:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ serial_no }}'\n    snapshot_policy_name: 10min_policy_1\n    storage_groups:\n    - 11_ansible_test_1\n    - 11_ansible_test_2\n    storage_group_state: present-in-policy\n    state: present\n"
    },
    {
        "label": "Modify snapshot policy, disassociate from storage groups",
        "description": "- dellemc.powermax.snapshotpolicy",
        "body": "- name: Modify snapshot policy, disassociate from storage groups\n  dellemc.powermax.snapshotpolicy:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ serial_no }}'\n    snapshot_policy_name: 10min_policy_1\n    storage_groups:\n    - 11_ansible_test_1\n    - 11_ansible_test_2\n    storage_group_state: absent-in-policy\n    state: present\n"
    },
    {
        "label": "Modify snapshot policy state to suspend",
        "description": "- dellemc.powermax.snapshotpolicy",
        "body": "- name: Modify snapshot policy state to suspend\n  dellemc.powermax.snapshotpolicy:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ serial_no }}'\n    snapshot_policy_name: 10min_policy_1\n    suspend: true\n    state: present\n"
    },
    {
        "label": "Modify snapshot policy state to resume",
        "description": "- dellemc.powermax.snapshotpolicy",
        "body": "- name: Modify snapshot policy state to resume\n  dellemc.powermax.snapshotpolicy:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ serial_no }}'\n    snapshot_policy_name: 10min_policy_1\n    suspend: false\n    state: present\n"
    },
    {
        "label": "Delete a snapshot policy",
        "description": "- dellemc.powermax.snapshotpolicy",
        "body": "- name: Delete a snapshot policy\n  dellemc.powermax.snapshotpolicy:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ serial_no }}'\n    snapshot_policy_name: 10min_policy_1\n    state: absent\n"
    },
    {
        "label": "Modify snapshot policy, disassociate from storage groups after re-name",
        "description": "- dellemc.powermax.snapshotpolicy",
        "body": "- name: Modify snapshot policy, disassociate from storage groups after re-name\n  dellemc.powermax.snapshotpolicy:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ serial_no }}'\n    snapshot_policy_name: 10min_policy_2_new\n    storage_groups:\n    - 11_ansible_test_1\n    - 11_ansible_test_2\n    storage_group_state: absent-in-policy\n    state: present\n"
    },
    {
        "label": "Delete a snapshot policy after re-name",
        "description": "- dellemc.powermax.snapshotpolicy",
        "body": "- name: Delete a snapshot policy after re-name\n  dellemc.powermax.snapshotpolicy:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ serial_no }}'\n    snapshot_policy_name: 10min_policy_2_new\n    state: absent\n"
    },
    {
        "label": "Create a new Storage group",
        "description": "- dellemc.powermax.storagegroup",
        "body": "- name: Create a new Storage group\n  dellemc.powermax.storagegroup:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ serial_no }}'\n    sg_name: '{{ sg_name }}'\n    service_level: Diamond\n    srp: SRP_1\n    compression: true\n    state: present\n  register: sg_result\n"
    },
    {
        "label": "Create new volumes for existing Storage Group",
        "description": "- dellemc.powermax.storagegroup",
        "body": "- name: Create new volumes for existing Storage Group\n  dellemc.powermax.storagegroup:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ serial_no }}'\n    sg_name: '{{ sg_name }}'\n    state: present\n    volumes:\n    - vol_name: ansible-test-x1\n      size: 1\n      cap_unit: GB\n    - vol_name: ansible-test-x2\n      size: 1\n      cap_unit: GB\n    vol_state: present-in-group\n  register: sg_result\n"
    },
    {
        "label": "Add existing volumes to existing Storage Group",
        "description": "- dellemc.powermax.storagegroup",
        "body": "- name: Add existing volumes to existing Storage Group\n  dellemc.powermax.storagegroup:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ serial_no }}'\n    sg_name: '{{ sg_name }}'\n    state: present\n    volumes:\n    - vol_id: '{{ vol1 }}'\n    - vol_id: '{{ vol2 }}'\n    vol_state: present-in-group\n  register: sg_result\n"
    },
    {
        "label": "List volumes of a Storage Group",
        "description": "- dellemc.powermax.storagegroup",
        "body": "- name: List volumes of a Storage Group\n  dellemc.powermax.storagegroup:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ serial_no }}'\n    sg_name: '{{ sg_name }}'\n    state: present\n  register: sg_result\n"
    },
    {
        "label": "Remove existing volumes from existing Storage Group",
        "description": "- dellemc.powermax.storagegroup",
        "body": "- name: Remove existing volumes from existing Storage Group\n  dellemc.powermax.storagegroup:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ serial_no }}'\n    sg_name: '{{ sg_name }}'\n    state: present\n    volumes:\n    - vol_id: '{{ vol1 }}'\n    - vol_id: '{{ vol2 }}'\n    - vol_name: ansible-test-x1\n    vol_state: absent-in-group\n  register: sg_result\n"
    },
    {
        "label": "Modify the Storage Group",
        "description": "- dellemc.powermax.storagegroup",
        "body": "- name: Modify the Storage Group\n  dellemc.powermax.storagegroup:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ serial_no }}'\n    sg_name: '{{ sg_name }}'\n    state: present\n    service_level: Platinum\n    compression: false\n  register: sg_result\n"
    },
    {
        "label": "Add snapshot policy to storage group",
        "description": "- dellemc.powermax.storagegroup",
        "body": "- name: Add snapshot policy to storage group\n  dellemc.powermax.storagegroup:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ serial_no }}'\n    sg_name: ansible_test_sg\n    snapshot_policies:\n    - ansible_SP1\n    snapshot_policy_state: present-in-group\n    state: present\n"
    },
    {
        "label": "Remove snapshot policy from storage group",
        "description": "- dellemc.powermax.storagegroup",
        "body": "- name: Remove snapshot policy from storage group\n  dellemc.powermax.storagegroup:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ serial_no }}'\n    sg_name: ansible_test_sg\n    snapshot_policies:\n    - ansible_SP1\n    snapshot_policy_state: absent-in-group\n    state: present\n"
    },
    {
        "label": "Delete the Storage Group",
        "description": "- dellemc.powermax.storagegroup",
        "body": "- name: Delete the Storage Group\n  dellemc.powermax.storagegroup:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ serial_no }}'\n    sg_name: '{{ sg_name }}'\n    state: absent\n"
    },
    {
        "label": "Create a new Parent Storage Group with FAST policy",
        "description": "- dellemc.powermax.storagegroup",
        "body": "- name: Create a new Parent Storage Group with FAST policy\n  dellemc.powermax.storagegroup:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ serial_no }}'\n    sg_name: prashant_parent_SG_xx1\n    srp: SRP_1\n    service_level: Diamond\n    compression: false\n    state: present\n"
    },
    {
        "label": "Create a new child Storage Group - prashant_child_SG_xx1",
        "description": "- dellemc.powermax.storagegroup",
        "body": "- name: Create a new child Storage Group - prashant_child_SG_xx1\n  dellemc.powermax.storagegroup:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ serial_no }}'\n    sg_name: prashant_child_SG_xx1\n    srp: SRP_1\n    service_level: Diamond\n    compression: false\n    state: present\n  register: sg_result\n"
    },
    {
        "label": "Create a volume for child SG",
        "description": "- dellemc.powermax.storagegroup",
        "body": "- name: Create a volume for child SG\n  dellemc.powermax.storagegroup:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ serial_no }}'\n    sg_name: prashant_child_SG_xx1\n    state: present\n    volumes:\n    - vol_name: prashant-child-vol\n      size: 1\n      cap_unit: GB\n    vol_state: present-in-group\n  register: sg_result\n"
    },
    {
        "label": "Create a new child Storage Group - prashant_child_SG_xx2",
        "description": "- dellemc.powermax.storagegroup",
        "body": "- name: Create a new child Storage Group - prashant_child_SG_xx2\n  dellemc.powermax.storagegroup:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ serial_no }}'\n    sg_name: prashant_child_SG_xx2\n    srp: SRP_1\n    service_level: Diamond\n    compression: false\n    state: present\n  register: sg_result\n"
    },
    {
        "label": "Create a volume for child SG after volume re-name",
        "description": "- dellemc.powermax.storagegroup",
        "body": "- name: Create a volume for child SG after volume re-name\n  dellemc.powermax.storagegroup:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ serial_no }}'\n    sg_name: prashant_child_SG_xx2\n    state: present\n    volumes:\n    - vol_name: prashant-child-vol-xx2\n      size: 1\n      cap_unit: GB\n    vol_state: present-in-group\n  register: sg_result\n"
    },
    {
        "label": "Modify the parent SG and add child SGs",
        "description": "- dellemc.powermax.storagegroup",
        "body": "- name: Modify the parent SG and add child SGs\n  dellemc.powermax.storagegroup:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ serial_no }}'\n    sg_name: prashant_parent_SG_xx1\n    srp: SRP_1\n    state: present\n    child_storage_groups:\n    - prashant_child_SG_xx1\n    - prashant_child_SG_xx2\n    child_sg_state: present-in-group\n  register: sg_result\n"
    },
    {
        "label": "Remove Child Storage Groups from Parent Storage Group",
        "description": "- dellemc.powermax.storagegroup",
        "body": "- name: Remove Child Storage Groups from Parent Storage Group\n  dellemc.powermax.storagegroup:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ serial_no }}'\n    sg_name: prashant_parent_SG_xx1\n    state: present\n    child_storage_groups:\n    - prashant_child_SG_xx1\n    - prashant_child_SG_xx2\n    child_sg_state: absent-in-group\n  register: sg_result\n"
    },
    {
        "label": "Test rename SG functionality",
        "description": "- dellemc.powermax.storagegroup",
        "body": "- name: Test rename SG functionality\n  dellemc.powermax.storagegroup:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ serial_no }}'\n    sg_name: prashant_parent_SG_xx1\n    new_sg_name: ansible_sg_renamed_successful\n    state: present\n  register: sg_result\n"
    },
    {
        "label": "Delete the storage group - prashant_child_SG_xx1",
        "description": "- dellemc.powermax.storagegroup",
        "body": "- name: Delete the storage group - prashant_child_SG_xx1\n  dellemc.powermax.storagegroup:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ serial_no }}'\n    sg_name: prashant_child_SG_xx1\n    state: absent\n"
    },
    {
        "label": "Delete the storage group - prashant_child_SG_xx2",
        "description": "- dellemc.powermax.storagegroup",
        "body": "- name: Delete the storage group - prashant_child_SG_xx2\n  dellemc.powermax.storagegroup:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ serial_no }}'\n    sg_name: prashant_child_SG_xx2\n    state: absent\n"
    },
    {
        "label": "Delete the storage group - ansible_sg_renamed_successful",
        "description": "- dellemc.powermax.storagegroup",
        "body": "- name: Delete the storage group - ansible_sg_renamed_successful\n  dellemc.powermax.storagegroup:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ serial_no }}'\n    sg_name: ansible_sg_renamed_successful\n    state: absent\n"
    },
    {
        "label": "Move volumes between Storage groups",
        "description": "- dellemc.powermax.storagegroup",
        "body": "- name: Move volumes between Storage groups\n  dellemc.powermax.storagegroup:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ serial_no }}'\n    sg_name: Ansible_Remote_Testing\n    target_sg_name: ansible_neo_sg\n    volumes:\n    - vol_id: 0007a\n    force: true\n    vol_state: absent-in-group\n    state: present\n"
    },
    {
        "label": "Set host IO limits on an existing storage group",
        "description": "- dellemc.powermax.storagegroup",
        "body": "- name: Set host IO limits on an existing storage group\n  dellemc.powermax.storagegroup:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ serial_no }}'\n    sg_name: '{{ sg_name }}'\n    host_io_limit:\n      dynamic_distribution: Always\n      host_io_limit_mbps: 100\n      host_io_limit_iops: 100\n    state: present\n"
    },
    {
        "label": "Create a new Storage group",
        "description": "- dellemc.powermax.storagegroup",
        "body": "- name: Create a new Storage group\n  dellemc.powermax.storagegroup:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ serial_no }}'\n    sg_name: '{{ sg_name }}'\n    service_level: Diamond\n    srp: SRP_1\n    compression: true\n    state: present\n  register: sg_result\n"
    },
    {
        "label": "Create new volumes for existing Storage Group",
        "description": "- dellemc.powermax.storagegroup",
        "body": "- name: Create new volumes for existing Storage Group\n  dellemc.powermax.storagegroup:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ serial_no }}'\n    sg_name: '{{ sg_name }}'\n    state: present\n    volumes:\n    - vol_name: ansible-test-x1\n      size: 1\n      cap_unit: GB\n    - vol_name: ansible-test-x2\n      size: 1\n      cap_unit: GB\n    vol_state: present-in-group\n  register: sg_result\n"
    },
    {
        "label": "Add existing volumes to existing Storage Group",
        "description": "- dellemc.powermax.storagegroup",
        "body": "- name: Add existing volumes to existing Storage Group\n  dellemc.powermax.storagegroup:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ serial_no }}'\n    sg_name: '{{ sg_name }}'\n    state: present\n    volumes:\n    - vol_id: '{{ vol1 }}'\n    - vol_id: '{{ vol2 }}'\n    vol_state: present-in-group\n  register: sg_result\n"
    },
    {
        "label": "List volumes of a Storage Group",
        "description": "- dellemc.powermax.storagegroup",
        "body": "- name: List volumes of a Storage Group\n  dellemc.powermax.storagegroup:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ serial_no }}'\n    sg_name: '{{ sg_name }}'\n    state: present\n  register: sg_result\n"
    },
    {
        "label": "Remove existing volumes from existing Storage Group",
        "description": "- dellemc.powermax.storagegroup",
        "body": "- name: Remove existing volumes from existing Storage Group\n  dellemc.powermax.storagegroup:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ serial_no }}'\n    sg_name: '{{ sg_name }}'\n    state: present\n    volumes:\n    - vol_id: '{{ vol1 }}'\n    - vol_id: '{{ vol2 }}'\n    - vol_name: ansible-test-x1\n    vol_state: absent-in-group\n  register: sg_result\n"
    },
    {
        "label": "Modify the Storage Group",
        "description": "- dellemc.powermax.storagegroup",
        "body": "- name: Modify the Storage Group\n  dellemc.powermax.storagegroup:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ serial_no }}'\n    sg_name: '{{ sg_name }}'\n    state: present\n    service_level: Platinum\n    compression: false\n  register: sg_result\n"
    },
    {
        "label": "Add snapshot policy to storage group",
        "description": "- dellemc.powermax.storagegroup",
        "body": "- name: Add snapshot policy to storage group\n  dellemc.powermax.storagegroup:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ serial_no }}'\n    sg_name: ansible_test_sg\n    snapshot_policies:\n    - ansible_SP1\n    snapshot_policy_state: present-in-group\n    state: present\n"
    },
    {
        "label": "Remove snapshot policy from storage group",
        "description": "- dellemc.powermax.storagegroup",
        "body": "- name: Remove snapshot policy from storage group\n  dellemc.powermax.storagegroup:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ serial_no }}'\n    sg_name: ansible_test_sg\n    snapshot_policies:\n    - ansible_SP1\n    snapshot_policy_state: absent-in-group\n    state: present\n"
    },
    {
        "label": "Delete the Storage Group",
        "description": "- dellemc.powermax.storagegroup",
        "body": "- name: Delete the Storage Group\n  dellemc.powermax.storagegroup:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ serial_no }}'\n    sg_name: '{{ sg_name }}'\n    state: absent\n"
    },
    {
        "label": "Create a new Parent Storage Group with FAST policy",
        "description": "- dellemc.powermax.storagegroup",
        "body": "- name: Create a new Parent Storage Group with FAST policy\n  dellemc.powermax.storagegroup:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ serial_no }}'\n    sg_name: prashant_parent_SG_xx1\n    srp: SRP_1\n    service_level: Diamond\n    compression: false\n    state: present\n"
    },
    {
        "label": "Create a new child Storage Group - prashant_child_SG_xx1",
        "description": "- dellemc.powermax.storagegroup",
        "body": "- name: Create a new child Storage Group - prashant_child_SG_xx1\n  dellemc.powermax.storagegroup:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ serial_no }}'\n    sg_name: prashant_child_SG_xx1\n    srp: SRP_1\n    service_level: Diamond\n    compression: false\n    state: present\n  register: sg_result\n"
    },
    {
        "label": "Create a volume for child SG",
        "description": "- dellemc.powermax.storagegroup",
        "body": "- name: Create a volume for child SG\n  dellemc.powermax.storagegroup:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ serial_no }}'\n    sg_name: prashant_child_SG_xx1\n    state: present\n    volumes:\n    - vol_name: prashant-child-vol\n      size: 1\n      cap_unit: GB\n    vol_state: present-in-group\n  register: sg_result\n"
    },
    {
        "label": "Create a new child Storage Group - prashant_child_SG_xx2",
        "description": "- dellemc.powermax.storagegroup",
        "body": "- name: Create a new child Storage Group - prashant_child_SG_xx2\n  dellemc.powermax.storagegroup:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ serial_no }}'\n    sg_name: prashant_child_SG_xx2\n    srp: SRP_1\n    service_level: Diamond\n    compression: false\n    state: present\n  register: sg_result\n"
    },
    {
        "label": "Create a volume for child SG after volume re-name",
        "description": "- dellemc.powermax.storagegroup",
        "body": "- name: Create a volume for child SG after volume re-name\n  dellemc.powermax.storagegroup:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ serial_no }}'\n    sg_name: prashant_child_SG_xx2\n    state: present\n    volumes:\n    - vol_name: prashant-child-vol-xx2\n      size: 1\n      cap_unit: GB\n    vol_state: present-in-group\n  register: sg_result\n"
    },
    {
        "label": "Modify the parent SG and add child SGs",
        "description": "- dellemc.powermax.storagegroup",
        "body": "- name: Modify the parent SG and add child SGs\n  dellemc.powermax.storagegroup:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ serial_no }}'\n    sg_name: prashant_parent_SG_xx1\n    srp: SRP_1\n    state: present\n    child_storage_groups:\n    - prashant_child_SG_xx1\n    - prashant_child_SG_xx2\n    child_sg_state: present-in-group\n  register: sg_result\n"
    },
    {
        "label": "Remove Child Storage Groups from Parent Storage Group",
        "description": "- dellemc.powermax.storagegroup",
        "body": "- name: Remove Child Storage Groups from Parent Storage Group\n  dellemc.powermax.storagegroup:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ serial_no }}'\n    sg_name: prashant_parent_SG_xx1\n    state: present\n    child_storage_groups:\n    - prashant_child_SG_xx1\n    - prashant_child_SG_xx2\n    child_sg_state: absent-in-group\n  register: sg_result\n"
    },
    {
        "label": "Test rename SG functionality",
        "description": "- dellemc.powermax.storagegroup",
        "body": "- name: Test rename SG functionality\n  dellemc.powermax.storagegroup:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ serial_no }}'\n    sg_name: prashant_parent_SG_xx1\n    new_sg_name: ansible_sg_renamed_successful\n    state: present\n  register: sg_result\n"
    },
    {
        "label": "Delete the storage group - prashant_child_SG_xx1",
        "description": "- dellemc.powermax.storagegroup",
        "body": "- name: Delete the storage group - prashant_child_SG_xx1\n  dellemc.powermax.storagegroup:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ serial_no }}'\n    sg_name: prashant_child_SG_xx1\n    state: absent\n"
    },
    {
        "label": "Delete the storage group - prashant_child_SG_xx2",
        "description": "- dellemc.powermax.storagegroup",
        "body": "- name: Delete the storage group - prashant_child_SG_xx2\n  dellemc.powermax.storagegroup:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ serial_no }}'\n    sg_name: prashant_child_SG_xx2\n    state: absent\n"
    },
    {
        "label": "Delete the storage group - ansible_sg_renamed_successful",
        "description": "- dellemc.powermax.storagegroup",
        "body": "- name: Delete the storage group - ansible_sg_renamed_successful\n  dellemc.powermax.storagegroup:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ serial_no }}'\n    sg_name: ansible_sg_renamed_successful\n    state: absent\n"
    },
    {
        "label": "Move volumes between Storage groups",
        "description": "- dellemc.powermax.storagegroup",
        "body": "- name: Move volumes between Storage groups\n  dellemc.powermax.storagegroup:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ serial_no }}'\n    sg_name: Ansible_Remote_Testing\n    target_sg_name: ansible_neo_sg\n    volumes:\n    - vol_id: 0007a\n    force: true\n    vol_state: absent-in-group\n    state: present\n"
    },
    {
        "label": "Set host IO limits on an existing storage group",
        "description": "- dellemc.powermax.storagegroup",
        "body": "- name: Set host IO limits on an existing storage group\n  dellemc.powermax.storagegroup:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ serial_no }}'\n    sg_name: '{{ sg_name }}'\n    host_io_limit:\n      dynamic_distribution: Always\n      host_io_limit_mbps: 100\n      host_io_limit_iops: 100\n    state: present\n"
    },
    {
        "label": "Get storage pool details",
        "description": "- dellemc.powermax.storagepool",
        "body": "- name: Get storage pool details\n  dellemc.powermax.storagepool:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ serial_no }}'\n    pool: SRP_1\n    state: present\n"
    },
    {
        "label": "Create volume",
        "description": "- dellemc.powermax.volume",
        "body": "- name: Create volume\n  register: result\n  dellemc.powermax.volume:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ serial_no }}'\n    vol_name: '{{ vol_name }}'\n    sg_name: '{{ sg_name }}'\n    size: 1\n    cap_unit: '{{ cap_unit }}'\n    append_vol_id: '{{ append_vol_id }}'\n    state: present\n"
    },
    {
        "label": "Expand volume using native id",
        "description": "- dellemc.powermax.volume",
        "body": "- name: Expand volume using native id\n  dellemc.powermax.volume:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ serial_no }}'\n    size: 2\n    cap_unit: '{{ cap_unit }}'\n    vol_id: '{{ result.volume_details.volumeId }}'\n    state: present\n"
    },
    {
        "label": "Expand volume using volume identifier and storage group",
        "description": "- dellemc.powermax.volume",
        "body": "- name: Expand volume using volume identifier and storage group\n  dellemc.powermax.volume:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ serial_no }}'\n    vol_name: '{{ vol_name }}'\n    sg_name: '{{ sg_name }}'\n    size: 3\n    cap_unit: '{{ cap_unit }}'\n    state: present\n"
    },
    {
        "label": "Move volume between storage group when current storage group is part of masking view",
        "description": "- dellemc.powermax.volume",
        "body": "- name: Move volume between storage group when current storage group is part of masking\n    view\n  dellemc.powermax.volume:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ serial_no }}'\n    vol_name: '{{ vol_name }}'\n    sg_name: '{{ sg_name }}'\n    new_sg_name: '{{ new_sg_name }}'\n    state: present\n"
    },
    {
        "label": "Move volume between storage group when current storage group is not part of masking view",
        "description": "- dellemc.powermax.volume",
        "body": "- name: Move volume between storage group when current storage group is not part of\n    masking view\n  dellemc.powermax.volume:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ serial_no }}'\n    vol_name: '{{ vol_name }}'\n    sg_name: '{{ new_sg_name }}'\n    new_sg_name: '{{ sg_name }}'\n    state: present\n"
    },
    {
        "label": "Rename volume",
        "description": "- dellemc.powermax.volume",
        "body": "- name: Rename volume\n  dellemc.powermax.volume:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ serial_no }}'\n    new_name: Ansible_Volume_Module_Playbook_Testing_Renamed\n    vol_id: '{{ result.volume_details.volumeId }}'\n    state: present\n"
    },
    {
        "label": "Get volume details",
        "description": "- dellemc.powermax.volume",
        "body": "- name: Get volume details\n  dellemc.powermax.volume:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ serial_no }}'\n    vol_id: '{{ result.volume_details.volumeId }}'\n    state: present\n"
    },
    {
        "label": "Get volume details using WWN",
        "description": "- dellemc.powermax.volume",
        "body": "- name: Get volume details using WWN\n  dellemc.powermax.volume:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ serial_no }}'\n    vol_wwn: '{{ result.volume_details.wwn }}'\n    state: present\n"
    },
    {
        "label": "Remove existing volume from existing storage group",
        "description": "- dellemc.powermax.storagegroup",
        "body": "- name: Remove existing volume from existing storage group\n  dellemc.powermax.storagegroup:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ serial_no }}'\n    sg_name: '{{ sg_name }}'\n    state: present\n    volumes:\n    - vol_id: '{{ result.volume_details.volumeId }}'\n    vol_state: absent-in-group\n"
    },
    {
        "label": "Delete volume",
        "description": "- dellemc.powermax.volume",
        "body": "- name: Delete volume\n  dellemc.powermax.volume:\n    unispherehost: '{{ unispherehost }}'\n    verifycert: '{{ verifycert }}'\n    user: '{{ user }}'\n    password: '{{ password }}'\n    serial_no: '{{ serial_no }}'\n    vol_id: '{{ result.volume_details.volumeId }}'\n    state: absent\n"
    }
]