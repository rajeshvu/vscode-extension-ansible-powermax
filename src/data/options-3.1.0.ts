import { ModuleOptions } from "./options";

export const options_3_1_0: ModuleOptions = {
    "dellemc.powermax.host": {
        "host_name": {
            "description": [
                "The name of the host. No Special Character support except for _. Case sensitive for REST Calls.",
                "Creation of an empty host is allowed."
            ],
            "required": true,
            "type": "str"
        },
        "initiators": {
            "description": [
                "List of Initiator WWN or IQN or alias to be added to or removed from the host."
            ],
            "type": "list",
            "elements": "str"
        },
        "state": {
            "description": [
                "Define whether the host should exist or not.",
                "absent - indicates that the host should not exist in the system.",
                "present - indicates that the host should exist in the system."
            ],
            "required": true,
            "choices": [
                "absent",
                "present"
            ],
            "type": "str"
        },
        "initiator_state": {
            "description": [
                "Define whether the initiators should be present or absent on the host.",
                "absent-in-host - indicates that the initiators should not exist on the host.",
                "present-in-host - indicates that the initiators should exist on the host.",
                "Required when creating a host with initiators or adding and removing initiators to or from an existing host."
            ],
            "choices": [
                "absent-in-host",
                "present-in-host"
            ],
            "type": "str"
        },
        "host_flags": {
            "description": [
                "Input as a yaml dictionary.",
                "List of all host_flags-",
                "1. volume_set_addressing.",
                "2. disable_q_reset_on_ua.",
                "3. environ_set.",
                "4. avoid_reset_broadcast.",
                "5. openvms.",
                "6. scsi_3.",
                "7. spc2_protocol_version.",
                "8. scsi_support1.",
                "9. consistent_lun.",
                "Possible values are true, false, unset (default state)."
            ],
            "required": false,
            "type": "dict"
        },
        "host_type": {
            "description": [
                "Describing the OS type."
            ],
            "required": false,
            "choices": [
                "default",
                "hpux"
            ],
            "type": "str"
        },
        "new_name": {
            "description": [
                "The new name of the host for the renaming function. No Special Character support except for _. Case sensitive for REST Calls."
            ],
            "type": "str"
        }
    },
    "dellemc.powermax.hostgroup": {
        "hostgroup_name": {
            "description": [
                "The name of the host group. No Special Character support except for _. Case sensitive for REST Calls."
            ],
            "required": true,
            "type": "str"
        },
        "hosts": {
            "description": [
                "List of host names to be added to the host group or removed from the host group.",
                "Creation of an empty host group is allowed."
            ],
            "type": "list",
            "elements": "str"
        },
        "state": {
            "description": [
                "Define whether the host group should be present or absent on the system.",
                "present - indicates that the host group should be present on the system.",
                "absent - indicates that the host group should be absent on the system."
            ],
            "required": true,
            "choices": [
                "absent",
                "present"
            ],
            "type": "str"
        },
        "host_state": {
            "description": [
                "Define whether the host should be present or absent in the host group.",
                "present-in-group - indicates that the hosts should exist in the host group.",
                "absent-in-group - indicates that the hosts should not exist in the host group."
            ],
            "choices": [
                "present-in-group",
                "absent-in-group"
            ],
            "type": "str"
        },
        "host_flags": {
            "description": [
                "input as an yaml dictionary.",
                "List of all host_flags -",
                "1. volume_set_addressing.",
                "2. disable_q_reset_on_ua.",
                "3. environ_set.",
                "4. avoid_reset_broadcast.",
                "5. openvms.",
                "6. scsi_3.",
                "7. spc2_protocol_version.",
                "8. scsi_support1.",
                "9. consistent_lun.",
                "Possible values are true, false, unset(default state)."
            ],
            "required": false,
            "type": "dict"
        },
        "host_type": {
            "description": [
                "Describing the OS type (default or hpux)."
            ],
            "required": false,
            "choices": [
                "default",
                "hpux"
            ],
            "type": "str"
        },
        "new_name": {
            "description": [
                "The new name for the host group for the renaming function. No Special Character support except for _. Case sensitive for REST Calls."
            ],
            "type": "str"
        }
    },
    "dellemc.powermax.info": {
        "serial_no": {
            "description": [
                "The serial number of the PowerMax or VMAX array. It is not required for getting the list of arrays."
            ],
            "type": "str",
            "required": false,
            "default": ""
        },
        "tdev_volumes": {
            "description": [
                "Boolean variable to filter the volume list. This has a small performance impact. The default setting is True and; only TDEV volumes will be returned.",
                "True - Returns only the TDEV volumes.",
                "False - Rreturns all the volumes."
            ],
            "required": false,
            "type": "bool",
            "choices": [
                true,
                false
            ],
            "default": true
        },
        "gather_subset": {
            "description": [
                "List of string variables to specify the PowerMax or VMAX entities for which information is required.",
                "Required only if the serial_no is present.",
                "List of all PowerMax or VMAX entities supported by the module.",
                "To get alert summary information - alert.",
                "To get health status of a specific PowerMax array - health.",
                "To get volumes - vol.",
                "To get storage resource pools - srp.",
                "To get storage groups - sg.",
                "To get port groups - pg.",
                "To get hosts - host.",
                "To get host groups - hg.",
                "To get ports - port.",
                "To get masking views - mv.",
                "To get RDF groups - rdf.",
                "To get Metro DR environments - metro_dr_env.",
                "To get snapshot policies - snapshot_policies.",
                "To get initiators - initiators.",
                "To get masking view connections - mv_connections."
            ],
            "required": false,
            "type": "list",
            "elements": "str",
            "choices": [
                "alert",
                "health",
                "vol",
                "srp",
                "sg",
                "pg",
                "host",
                "hg",
                "port",
                "mv",
                "rdf",
                "metro_dr_env",
                "snapshot_policies",
                "initiators",
                "mv_connections"
            ]
        },
        "filters": {
            "description": [
                "List of filters to support filtered output for storage entities.",
                "Each filter is a tuple of {filter_key, filter_operator, filter_value}.",
                "Supports passing of multiple filters.",
                "The storage entities, 'rdf', 'health', 'snapshot_policies' and 'metro_dr_env', does not support filters. Filters are ignored if passed."
            ],
            "required": false,
            "type": "list",
            "elements": "dict",
            "suboptions": {
                "filter_key": {
                    "description": [
                        "Name identifier of the filter."
                    ],
                    "type": "str",
                    "required": true
                },
                "filter_operator": {
                    "description": [
                        "Operation to be performed on filter key."
                    ],
                    "type": "str",
                    "choices": [
                        "equal",
                        "greater",
                        "lesser",
                        "like"
                    ],
                    "required": true
                },
                "filter_value": {
                    "description": [
                        "Value of the filter key."
                    ],
                    "type": "str",
                    "required": true
                }
            }
        },
        "masking_view_name": {
            "description": [
                "The name of the masking view to fetch the masking view connections."
            ],
            "type": "str"
        }
    },
    "dellemc.powermax.initiator": {
        "initiator_id": {
            "description": [
                "The initiator WWN or IQN."
            ],
            "type": "str"
        },
        "alias": {
            "description": [
                "Alias of initiator."
            ],
            "type": "str"
        },
        "new_alias": {
            "description": [
                "Rename alias for specified initiator."
            ],
            "type": "dict",
            "suboptions": {
                "new_node_name": {
                    "description": [
                        "The new node name to rename the initiator alias."
                    ],
                    "type": "str"
                },
                "new_port_name": {
                    "description": [
                        "The new port name to rename the initiator alias."
                    ],
                    "type": "str"
                }
            }
        },
        "state": {
            "description": [
                "The state of the initiator after the task is performed.",
                "absent - indicates that the initiator should not exist in the system.",
                "present - indicates that the initiator should exist in the system."
            ],
            "required": true,
            "choices": [
                "absent",
                "present"
            ],
            "type": "str"
        }
    },
    "dellemc.powermax.job": {
        "job_id": {
            "description": [
                "Job ID of an asynchronous task, used for getting details of a job."
            ],
            "required": true,
            "type": "str"
        }
    },
    "dellemc.powermax.maskingview": {
        "mv_name": {
            "description": [
                "The name of the masking view. No Special Character support except for _. Case sensitive for REST Calls."
            ],
            "required": true,
            "type": "str"
        },
        "portgroup_name": {
            "description": [
                "The name of the existing port group."
            ],
            "type": "str"
        },
        "host_name": {
            "description": [
                "The name of the existing host. This parameter is to create an exclusive or host export."
            ],
            "type": "str"
        },
        "hostgroup_name": {
            "description": [
                "The name of the existing host group. This parameter is used to create cluster export."
            ],
            "type": "str"
        },
        "sg_name": {
            "description": [
                "The name of the existing storage group."
            ],
            "type": "str"
        },
        "new_mv_name": {
            "description": [
                "The new name for the renaming function. No Special Character support except for _. Case sensitive for REST Calls."
            ],
            "type": "str"
        },
        "state": {
            "description": [
                "Defines whether the masking view should exist or not."
            ],
            "choices": [
                "absent",
                "present"
            ],
            "required": true,
            "type": "str"
        }
    },
    "dellemc.powermax.metrodr": {
        "env_name": {
            "description": [
                "Name of the metro DR environment.",
                "Metro DR environment name will be unique across PowerMax."
            ],
            "required": true,
            "type": "str"
        },
        "sg_name": {
            "description": [
                "Name of the storage group.",
                "Storage group will be present on the primary metro array and a storage group with the same name will be created on remote and DR arrays in a create operation.",
                "Storage group name is required in 'create metro DR environment' and 'convert SG into metro DR environment' operations."
            ],
            "required": false,
            "type": "str"
        },
        "metro_r1_array_id": {
            "description": [
                "Serial number of the primary metro array."
            ],
            "required": true,
            "type": "str"
        },
        "metro_r2_array_id": {
            "description": [
                "Serial number of the remote metro array.",
                "It is required only in create and convert operations."
            ],
            "required": false,
            "type": "str"
        },
        "dr_array_id": {
            "description": [
                "Serial number of the DR array.",
                "It is required in create and convert operations."
            ],
            "required": false,
            "type": "str"
        },
        "replication_mode": {
            "description": [
                "Replication mode whose value will indicate how the data will be replicated.",
                "It is required in create and modify operations.",
                "It is a mandatory parameter in a create operation but optional in a modify operation."
            ],
            "required": false,
            "type": "str",
            "choices": [
                "Asynchronous",
                "Adaptive Copy"
            ]
        },
        "wait_for_completion": {
            "description": [
                "The flag indicates if the operation should be run synchronously or asynchronously.",
                "True signifies synchronous execution.",
                "By default, create and convert are asynchronous operations, whereas modify is a synchronous operation."
            ],
            "required": false,
            "type": "bool",
            "default": false
        },
        "new_rdf_group_r1": {
            "description": [
                "The flag indicates whether or not to create a new RDFG for a Metro R1 array to a DR array, or to autoselect from an existing one.",
                "Used in only create operation."
            ],
            "required": false,
            "type": "bool",
            "default": true
        },
        "new_rdf_group_r2": {
            "description": [
                "The flag indicates whether or not to create a new RDFG for a Metro R2 array to a DR array, or to autoselect from an existing one.",
                "It is used only in create operation."
            ],
            "required": false,
            "type": "bool",
            "default": true
        },
        "remove_r1_dr_rdfg": {
            "description": [
                "The flag indicates whether or not to override default behavior and delete R11-R2 RDFG from the metro R1 side.",
                "It is used only in delete operations."
            ],
            "required": false,
            "type": "bool",
            "default": false
        },
        "srdf_param": {
            "description": [
                "It contains parameters related to SRDF links.",
                "It is used only in modify operations."
            ],
            "required": false,
            "type": "dict",
            "suboptions": {
                "srdf_state": {
                    "description": [
                        "State of the SRDF link.",
                        "It is a mandatory parameter for modify operations."
                    ],
                    "required": true,
                    "type": "str",
                    "choices": [
                        "Split",
                        "Restore",
                        "SetMode",
                        "Failback",
                        "Failover",
                        "Establish",
                        "Suspend",
                        "UpdateR1",
                        "Recover"
                    ]
                },
                "metro": {
                    "description": [
                        "The flag indicates whether or not to direct srdf_state change towards the R1--R2 Metro Device leg of the metro DR environment."
                    ],
                    "required": false,
                    "type": "bool",
                    "default": false
                },
                "dr": {
                    "description": [
                        "The flag indicates whether or not to direct srdf_state change towards device pairs on the disaster recovery leg of the metro DR environment."
                    ],
                    "required": false,
                    "type": "bool",
                    "default": false
                },
                "keep_r2": {
                    "description": [
                        "The flag indicates whether or not in the case of srdf state suspend to make R2 data on metro available to the host."
                    ],
                    "required": false,
                    "type": "bool",
                    "default": false
                }
            }
        },
        "state": {
            "description": [
                "State variable to determine whether metro DR environment will exist or not."
            ],
            "required": true,
            "type": "str",
            "choices": [
                "absent",
                "present"
            ]
        }
    },
    "dellemc.powermax.port": {
        "ports": {
            "description": [
                "List of port director and port id"
            ],
            "required": true,
            "type": "list",
            "elements": "dict"
        }
    },
    "dellemc.powermax.portgroup": {
        "portgroup_name": {
            "description": [
                "The name of the port group. No Special Character support except for _. Case sensitive for REST Calls."
            ],
            "required": true,
            "type": "str"
        },
        "ports": {
            "description": [
                "List of directors and ports to be added or removed to or from the port group."
            ],
            "required": false,
            "type": "list",
            "elements": "dict"
        },
        "port_group_protocol": {
            "description": [
                "Port Group protocol.",
                "Required only for V4(Juniper)."
            ],
            "required": false,
            "choices": [
                "SCSI_FC",
                "iSCSI",
                "NVMe_TCP"
            ],
            "type": "str"
        },
        "new_name": {
            "description": [
                "New name of the port group while renaming. No Special Character support except for _. Case sensitive for REST Calls."
            ],
            "required": false,
            "type": "str"
        },
        "state": {
            "description": [
                "Define whether the port group should exist or not.",
                "present - indicates that the port group should be present on the system.",
                "absent - indicates that the port group should not be present on the system."
            ],
            "required": true,
            "choices": [
                "absent",
                "present"
            ],
            "type": "str"
        },
        "port_state": {
            "description": [
                "Define whether the port should be present or absent in the port group.",
                "present-in-group - indicates that the ports should be present on a port group object.",
                "absent-in-group - indicates that the ports should not be present on a port group object."
            ],
            "required": false,
            "choices": [
                "present-in-group",
                "absent-in-group"
            ],
            "type": "str"
        }
    },
    "dellemc.powermax.process_storage_pool_dict": {
        "pool_data": {
            "description": [
                "Storage pool details including service levels, usable total space, usable free space, total free space."
            ],
            "elements": "dict",
            "required": true,
            "type": "list"
        },
        "size": {
            "description": [
                "Size of the storage group in GB."
            ],
            "required": true,
            "type": "float"
        },
        "sg_name": {
            "description": [
                "Name of the storage group."
            ],
            "type": "str"
        },
        "service_level": {
            "description": [
                "Service level of the storage group."
            ],
            "type": "str"
        }
    },
    "dellemc.powermax.rdfgroup": {
        "rdfgroup_number": {
            "description": [
                "Identifier of an RDF Group of type string."
            ],
            "required": true,
            "type": "str"
        },
        "vol_name": {
            "description": [
                "Name of the volume."
            ],
            "required": false,
            "type": "str"
        }
    },
    "dellemc.powermax.snapshot": {
        "sg_name": {
            "description": [
                "The name of the storage group."
            ],
            "required": true,
            "type": "str"
        },
        "snapshot_name": {
            "description": [
                "The name of the snapshot."
            ],
            "required": true,
            "type": "str"
        },
        "ttl": {
            "description": [
                "The Time To Live (TTL) value for the snapshot.",
                "If the TTL is not specified, the storage group snap details are returned.",
                "However, to create a SG snap - TTL must be given.",
                "If the SG snap should not have any TTL - specify TTL as C(None)."
            ],
            "type": "str"
        },
        "ttl_unit": {
            "description": [
                "The unit for the I(ttl).",
                "If no I(ttl_unit) is specified, C(days) is taken as default I(ttl_unit)."
            ],
            "choices": [
                "hours",
                "days"
            ],
            "default": "days",
            "type": "str"
        },
        "generation": {
            "description": [
                "The generation number of the snapshot.",
                "Generation is required for link, unlink, rename and delete operations.",
                "Optional for Get snapshot details.",
                "Create snapshot will always create a new snapshot with a generation number 0.",
                "Rename is supported only for generation number 0."
            ],
            "type": "int"
        },
        "snapshot_id": {
            "description": [
                "Unique ID of the snapshot.",
                "I(snapshot_id) is required for link, unlink, rename and delete operations.",
                "Optional for Get snapshot details."
            ],
            "type": "int"
        },
        "new_snapshot_name": {
            "description": [
                "The new name of the snapshot."
            ],
            "type": "str"
        },
        "target_sg_name": {
            "description": [
                "The target storage group."
            ],
            "type": "str"
        },
        "link_status": {
            "description": [
                "Describes the link status of the snapshot."
            ],
            "choices": [
                "linked",
                "unlinked"
            ],
            "type": "str"
        },
        "restore": {
            "description": [
                "Whether to restore a storage group to its snapshot."
            ],
            "type": "bool",
            "version_added": "3.1.0"
        },
        "state": {
            "description": [
                "Define whether the snapshot should exist or not."
            ],
            "required": true,
            "choices": [
                "absent",
                "present"
            ],
            "type": "str"
        }
    },
    "dellemc.powermax.snapshotpolicy": {
        "universion": {
            "description": [
                "Unisphere version, currently '92', '100' and '101' version is supported."
            ],
            "type": "int",
            "required": false,
            "choices": [
                92,
                100,
                101
            ]
        },
        "snapshot_policy_name": {
            "description": [
                "Name of the snapshot policy."
            ],
            "required": true,
            "type": "str"
        },
        "interval": {
            "description": [
                "The value of the interval counter for snapshot policy execution."
            ],
            "required": false,
            "type": "str",
            "choices": [
                "10 Minutes",
                "12 Minutes",
                "15 Minutes",
                "20 Minutes",
                "30 Minutes",
                "1 Hour",
                "2 Hours",
                "3 Hours",
                "4 Hours",
                "6 Hours",
                "8 Hours",
                "12 Hours",
                "1 Day",
                "7 Days"
            ]
        },
        "secure": {
            "description": [
                "Secure snapshots may only be terminated after they expire or by Dell Technologies support.",
                "If not specified, default value is False."
            ],
            "required": false,
            "type": "bool",
            "choices": [
                true,
                false
            ]
        },
        "snapshot_count": {
            "description": [
                "The max snapshot count of the policy.",
                "Max value is 1024."
            ],
            "required": false,
            "type": "int"
        },
        "offset_mins": {
            "description": [
                "Defines when, within the interval the snapshots will be taken for a specified snapshot policy.",
                "The offset must be less than the interval of the snapshot policy.",
                "The format must be in minutes.",
                "If not specified, default value is 0."
            ],
            "required": false,
            "type": "int"
        },
        "compliance_count_warning": {
            "description": [
                "If the number of valid snapshots falls below this number, the compliance changes to warning (yellow)."
            ],
            "required": false,
            "type": "int"
        },
        "compliance_count_critical": {
            "description": [
                "If the number of valid snapshots falls below this number, the compliance changes to critical (red)."
            ],
            "required": false,
            "type": "int"
        },
        "storage_groups": {
            "description": [
                "List of storage groups."
            ],
            "required": false,
            "type": "list",
            "elements": "str"
        },
        "storage_group_state": {
            "description": [
                "The state of the storage group with regard to the snapshot policy.",
                "present-in-policy indicates associate SG to SP.",
                "absent-in-policy indicates disassociate SG from SP."
            ],
            "required": false,
            "type": "str",
            "choices": [
                "present-in-policy",
                "absent-in-policy"
            ]
        },
        "suspend": {
            "description": [
                "Suspend the snapshot policy.",
                "True indicates snapshot policy is in suspend state.",
                "False indicates snapshot policy is in resume state."
            ],
            "required": false,
            "type": "bool",
            "choices": [
                true,
                false
            ]
        },
        "new_snapshot_policy_name": {
            "description": [
                "New name of the snapshot policy."
            ],
            "required": false,
            "type": "str"
        },
        "state": {
            "description": [
                "Shows if the snapshot policy should be present or absent."
            ],
            "required": true,
            "type": "str",
            "choices": [
                "present",
                "absent"
            ]
        }
    },
    "dellemc.powermax.srdf": {
        "sg_name": {
            "description": [
                "Name of storage group. SRDF pairings are managed at a storage group level.",
                "Required to identify the SRDF link."
            ],
            "required": false,
            "type": "str"
        },
        "serial_no": {
            "description": [
                "The serial number will refer to the source PowerMax/VMAX array when protecting a storage group. However srdf_state operations may be issued from primary or remote array."
            ],
            "required": true,
            "type": "str"
        },
        "remote_serial_no": {
            "description": [
                "Integer 12-digit serial number of remote PowerMax or VMAX array.",
                "Required while creating an SRDF link."
            ],
            "required": false,
            "type": "str"
        },
        "rdfg_no": {
            "description": [
                "The RDF group number.",
                "Optional parameter for each call. For a create operation, if specified, the array will reuse the RDF group, otherwise an error is returned. For modify and delete operations, if the RFD group number is not specified, and the storage group is protected by multiple RDF groups, then an error is raised."
            ],
            "required": false,
            "type": "int"
        },
        "state": {
            "description": [
                "Define whether the SRDF pairing should exist or not.",
                "present indicates that the SRDF pairing should exist in system.",
                "absent indicates that the SRDF pairing should not exist in system."
            ],
            "required": true,
            "type": "str",
            "choices": [
                "absent",
                "present"
            ]
        },
        "srdf_mode": {
            "description": [
                "The replication mode of the SRDF pair.",
                "Required when creating an SRDF pair.",
                "Can be modified by providing a required value."
            ],
            "choices": [
                "Active",
                "Adaptive Copy",
                "Synchronous",
                "Asynchronous"
            ],
            "required": false,
            "type": "str"
        },
        "srdf_state": {
            "description": [
                "Desired state of the SRDF pairing. While creating a new SRDF pair, allowed values are 'Establish' and 'Suspend'. If the state is not specified, the pair will be created in a 'Suspended' state. When modifying the state, only certain changes are allowed."
            ],
            "required": false,
            "type": "str",
            "choices": [
                "Establish",
                "Resume",
                "Restore",
                "Suspend",
                "Swap",
                "Split",
                "Failback",
                "Failover",
                "Setbias"
            ]
        },
        "new_rdf_group": {
            "description": [
                "Overrides the SRDF group selection functionality and forces the creation of a new SRDF group.",
                "PowerMax has a limited number of RDF groups. If this flag is set to True, and the RDF groups are exhausted, then SRDF link creation will fail.",
                "If not specified, default value is 'false'."
            ],
            "required": false,
            "type": "bool"
        },
        "wait_for_completion": {
            "description": [
                "Flag to indicate if the operation should be run synchronously or asynchronously. True signifies synchronous execution. By default, all create and update operations will be run asynchronously."
            ],
            "required": false,
            "default": false,
            "type": "bool"
        },
        "job_id": {
            "description": [
                "Job ID of an asynchronous task. Can be used to get details of a job."
            ],
            "required": false,
            "type": "str"
        },
        "witness": {
            "description": [
                "Flag to specify use of Witness for a Metro configuration. Setting to True signifies to use Witness, setting it to False signifies to use Bias. It is recommended to configure a witness for SRDF Metro in a production environment, this is configured via Unisphere for PowerMax UI or REST.",
                "The flag can be set only for modifying srdf_state to either Establish, Suspend, or Restore.",
                "While creating a Metro configuration, the witness flag must be set to True."
            ],
            "required": false,
            "type": "bool"
        }
    },
    "dellemc.powermax.storagegroup": {
        "sg_name": {
            "description": [
                "The name of the storage group."
            ],
            "required": true,
            "type": "str"
        },
        "service_level": {
            "description": [
                "The name of SLO."
            ],
            "type": "str"
        },
        "srp": {
            "description": [
                "The name of the storage resource pool.",
                "This parameter is ignored if service_level is not specified.",
                "Default is to use whichever is the default SRP on the array."
            ],
            "type": "str"
        },
        "compression": {
            "description": [
                "Compression on storage group.",
                "Compression parameter is ignored if service_level is not specified.",
                "Default is true."
            ],
            "type": "bool"
        },
        "volumes": {
            "description": [
                "This is a list of volumes.",
                "Each volume has four attributes; vol_name, size, cap_unit, vol_id.",
                "Volume ID must be provided for existing volumes.",
                "The size must be provided to add new volumes to SG.",
                "The cap_unit is optional.",
                "Default value of cap_unit is GB, choices are MB, GB, TB."
            ],
            "type": "list",
            "elements": "dict"
        },
        "vol_state": {
            "description": [
                "Describes the state of volumes inside the SG."
            ],
            "choices": [
                "present-in-group",
                "absent-in-group"
            ],
            "type": "str"
        },
        "child_storage_groups": {
            "description": [
                "This is a list of child storage groups."
            ],
            "type": "list",
            "elements": "str"
        },
        "child_sg_state": {
            "description": [
                "Describes the state of CSG inside parent SG."
            ],
            "choices": [
                "present-in-group",
                "absent-in-group"
            ],
            "type": "str"
        },
        "new_sg_name": {
            "description": [
                "The new name of the storage group."
            ],
            "type": "str"
        },
        "target_sg_name": {
            "description": [
                "The destination SG name to move the volumes to."
            ],
            "type": "str"
        },
        "force": {
            "description": [
                "This flag is to be set to True while moving volumes to target SG if volume is in a masking view."
            ],
            "type": "bool"
        },
        "snapshot_policies": {
            "description": [
                "List of snapshot policies."
            ],
            "type": "list",
            "elements": "str"
        },
        "snapshot_policy_state": {
            "description": [
                "Describes the state of snapshot policy for an SG."
            ],
            "type": "str",
            "choices": [
                "present-in-group",
                "absent-in-group"
            ]
        },
        "host_io_limit": {
            "description": [
                "Host I/O limit of the storage group."
            ],
            "type": "dict",
            "suboptions": {
                "host_io_limit_iops": {
                    "description": [
                        "The I/Os per second host I/O limit for the storage group."
                    ],
                    "type": "int"
                },
                "dynamic_distribution": {
                    "description": [
                        "The dynamic distribution of host I/O limit for the storage group."
                    ],
                    "type": "str",
                    "default": "Never",
                    "choices": [
                        "Always",
                        "Never",
                        "OnFailure"
                    ]
                },
                "host_io_limit_mbps": {
                    "description": [
                        "The MBs per second host I/O limit for the storage group."
                    ],
                    "type": "int"
                }
            }
        },
        "state": {
            "description": [
                "Define whether the storage group should exist or not."
            ],
            "choices": [
                "absent",
                "present"
            ],
            "type": "str",
            "required": true
        }
    },
    "dellemc.powermax.storagepool": {
        "pool": {
            "description": [
                "The name of the storage pool."
            ],
            "required": true,
            "type": "str"
        },
        "state": {
            "description": [
                "State variable to determine whether storage pool will exist or not."
            ],
            "required": true,
            "type": "str",
            "choices": [
                "absent",
                "present"
            ]
        }
    },
    "dellemc.powermax.volume": {
        "vol_name": {
            "description": [
                "The name of the volume."
            ],
            "type": "str"
        },
        "sg_name": {
            "description": [
                "The name of the storage group."
            ],
            "type": "str"
        },
        "new_sg_name": {
            "description": [
                "The name of the target storage group."
            ],
            "type": "str"
        },
        "vol_id": {
            "description": [
                "The native id of the volume.",
                "Required for rename and delete volume operations."
            ],
            "type": "str"
        },
        "size": {
            "description": [
                "The new size of existing volume.",
                "Required for create and expand volume operations."
            ],
            "type": "float"
        },
        "cap_unit": {
            "description": [
                "volume capacity units.",
                "If not specified, default value is GB."
            ],
            "choices": [
                "MB",
                "GB",
                "TB",
                "CYL"
            ],
            "type": "str"
        },
        "new_name": {
            "description": [
                "The new volume identifier for the volume."
            ],
            "type": "str"
        },
        "vol_wwn": {
            "description": [
                "The WWN of the volume."
            ],
            "type": "str"
        },
        "append_vol_id": {
            "description": [
                "Appends volume id to the volume name, Applicable from V4 (Juniper)."
            ],
            "type": "bool"
        },
        "state": {
            "description": [
                "Defines whether the volume should exist or not."
            ],
            "required": true,
            "choices": [
                "absent",
                "present"
            ],
            "type": "str"
        }
    }
}