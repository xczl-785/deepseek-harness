<!-- 英文源文件由 scripts/gen-module-graph.ts 生成；本中文文件是通过双语配对维护的经评审对侧。
     更新时先运行 `pnpm run gen-module-graph` 更新英文，再更新本文件并运行 `pnpm run verify-translation-pairing --write docs/module-graph.md` 重新记录配对。 -->

# 模块依赖关系图

[English](module-graph.md) | 中文

`@deepseek-ai/dsh-*` harness 包之间的依赖关系。该关系图根据各包的 `peerDependencies`（规范的运行时依赖信号）生成，并按 `packages/<group>/<pkg>` 层级分组。边 `a --> b` 表示包 `a` 依赖包 `b`。名称中的 `@deepseek-ai/dsh-` 前缀已移除。

```mermaid
flowchart TD
  subgraph group_util["packages/util"]
    pkg_atomic_write["atomic-write"]
    pkg_brand["brand"]
    pkg_home_paths["home-paths"]
    pkg_launch_environment["launch-environment"]
    pkg_native_command["native-command"]
    pkg_output_retention["output-retention"]
    pkg_timeout["timeout"]
  end
  subgraph group_llm["packages/llm"]
    pkg_llm["llm"]
    pkg_llm_deepseek["llm-deepseek"]
    pkg_llm_pi_ai["llm-pi-ai"]
    pkg_llm_retry["llm-retry"]
    pkg_token_meter["token-meter"]
  end
  subgraph group_core["packages/core"]
    pkg_agent["agent"]
    pkg_agent_default_model["agent-default-model"]
    pkg_agent_loop["agent-loop"]
    pkg_agent_tool_presentation["agent-tool-presentation"]
    pkg_scope["scope"]
    pkg_session["session"]
    pkg_system_prompt["system-prompt"]
    pkg_tools["tools"]
  end
  subgraph group_goal["packages/goal"]
    pkg_command_goal["command-goal"]
    pkg_goal["goal"]
    pkg_goal_round_driver["goal-round-driver"]
    pkg_tool_goal["tool-goal"]
  end
  subgraph group_fs["packages/fs"]
    pkg_fs["fs"]
    pkg_fs_local["fs-local"]
    pkg_fs_observation_policy["fs-observation-policy"]
    pkg_fs_sandbox["fs-sandbox"]
    pkg_tool_fs["tool-fs"]
    pkg_tool_fs_search["tool-fs-search"]
    pkg_tool_str_replace_editor["tool-str-replace-editor"]
  end
  subgraph group_skill["packages/skill"]
    pkg_skill["skill"]
    pkg_skill_badge["skill-badge"]
    pkg_skill_filesystem["skill-filesystem"]
    pkg_tool_skill["tool-skill"]
  end
  subgraph group_subagent["packages/subagent"]
    pkg_subagent["subagent"]
    pkg_subagent_acp["subagent-acp"]
    pkg_subagent_claude_code["subagent-claude-code"]
    pkg_subagent_codex["subagent-codex"]
    pkg_subagent_dsh_sdk["subagent-dsh-sdk"]
    pkg_subagent_fork_in_process["subagent-fork-in-process"]
    pkg_subagent_in_process_driver["subagent-in-process-driver"]
    pkg_subagent_spawn_in_process["subagent-spawn-in-process"]
    pkg_tool_subagent["tool-subagent"]
    pkg_tool_subagent_control["tool-subagent-control"]
    pkg_tool_subagent_report["tool-subagent-report"]
  end
  subgraph group_web["packages/web"]
    pkg_tool_web["tool-web"]
    pkg_web["web"]
    pkg_web_fetch_http["web-fetch-http"]
    pkg_web_search_deepseek["web-search-deepseek"]
    pkg_web_search_exa["web-search-exa"]
    pkg_web_search_perplexity["web-search-perplexity"]
  end
  subgraph group_spill["packages/spill"]
    pkg_spill["spill"]
    pkg_spill_local["spill-local"]
    pkg_spill_policy["spill-policy"]
  end
  subgraph group_todo["packages/todo"]
    pkg_tool_todo["tool-todo"]
  end
  subgraph group_plan["packages/plan"]
    pkg_plan_mode["plan-mode"]
  end
  subgraph group_hooks["packages/hooks"]
    pkg_hook_protocol["hook-protocol"]
    pkg_hooks_claude_code["hooks-claude-code"]
    pkg_hooks_codex["hooks-codex"]
  end
  subgraph group_session_query["packages/session-query"]
    pkg_session_log_export["session-log-export"]
    pkg_session_query["session-query"]
    pkg_session_query_sqlite["session-query-sqlite"]
    pkg_tool_session_query["tool-session-query"]
  end
  subgraph group_acp["packages/acp"]
    pkg_acp["acp"]
  end
  subgraph group_api["packages/api"]
    pkg_api_gateway["api-gateway"]
    pkg_api_remotes["api-remotes"]
  end
  subgraph group_attachment["packages/attachment"]
    pkg_attachment["attachment"]
    pkg_attachment_local["attachment-local"]
  end
  subgraph group_boot["packages/boot"]
    pkg_app_boot["app-boot"]
    pkg_cmdline["cmdline"]
  end
  subgraph group_bundle["packages/bundle"]
    pkg_base["base"]
    pkg_headless["headless"]
    pkg_web_app["web-app"]
  end
  subgraph group_client["packages/client"]
    pkg_client_connection["client-connection"]
    pkg_client_hmr["client-hmr"]
    pkg_client_locale["client-locale"]
    pkg_client_modules["client-modules"]
    pkg_client_runtime["client-runtime"]
    pkg_client_schema_form["client-schema-form"]
    pkg_client_ui_agent_preset["client-ui-agent-preset"]
    pkg_client_ui_attachment["client-ui-attachment"]
    pkg_client_ui_commands["client-ui-commands"]
    pkg_client_ui_conversation["client-ui-conversation"]
    pkg_client_ui_deliverables["client-ui-deliverables"]
    pkg_client_ui_directory_picker_browse["client-ui-directory-picker-browse"]
    pkg_client_ui_directory_picker_native["client-ui-directory-picker-native"]
    pkg_client_ui_goal["client-ui-goal"]
    pkg_client_ui_input_trigger["client-ui-input-trigger"]
    pkg_client_ui_jobs["client-ui-jobs"]
    pkg_client_ui_layout["client-ui-layout"]
    pkg_client_ui_message_feedback["client-ui-message-feedback"]
    pkg_client_ui_model_selection["client-ui-model-selection"]
    pkg_client_ui_permission_presets["client-ui-permission-presets"]
    pkg_client_ui_plan["client-ui-plan"]
    pkg_client_ui_primitives["client-ui-primitives"]
    pkg_client_ui_settings["client-ui-settings"]
    pkg_client_ui_settings_general["client-ui-settings-general"]
    pkg_client_ui_settings_models["client-ui-settings-models"]
    pkg_client_ui_settings_plugin_inventory["client-ui-settings-plugin-inventory"]
    pkg_client_ui_settings_plugins["client-ui-settings-plugins"]
    pkg_client_ui_sidebar["client-ui-sidebar"]
    pkg_client_ui_skill["client-ui-skill"]
    pkg_client_ui_slots["client-ui-slots"]
    pkg_client_ui_subagent["client-ui-subagent"]
    pkg_client_ui_theme["client-ui-theme"]
    pkg_client_ui_tool["client-ui-tool"]
    pkg_client_ui_trajectory["client-ui-trajectory"]
    pkg_client_ui_user_questions["client-ui-user-questions"]
    pkg_client_ui_workflow_run["client-ui-workflow-run"]
    pkg_client_ui_workspace["client-ui-workspace"]
    pkg_client_web["client-web"]
    pkg_client_web_react["client-web-react"]
  end
  subgraph group_code_runtime["packages/code-runtime"]
    pkg_code_runtime["code-runtime"]
    pkg_code_runtime_worker_thread["code-runtime-worker-thread"]
  end
  subgraph group_compaction["packages/compaction"]
    pkg_command_compact["command-compact"]
    pkg_compaction["compaction"]
    pkg_compaction_basic["compaction-basic"]
    pkg_compaction_tool_result_pruner["compaction-tool-result-pruner"]
  end
  subgraph group_context["packages/context"]
    pkg_agent_instructions["agent-instructions"]
    pkg_session_reference["session-reference"]
    pkg_time_context["time-context"]
    pkg_tmux_context["tmux-context"]
  end
  subgraph group_credentials["packages/credentials"]
    pkg_credentials["credentials"]
    pkg_credentials_local["credentials-local"]
  end
  subgraph group_e2b["packages/e2b"]
    pkg_e2b["e2b"]
    pkg_fs_e2b["fs-e2b"]
    pkg_subprocess_e2b["subprocess-e2b"]
  end
  subgraph group_examples["packages/examples"]
    pkg_acp_demo["acp-demo"]
    pkg_agent_spine_demo["agent-spine-demo"]
    pkg_sdk_jsonrpc_demo["sdk-jsonrpc-demo"]
  end
  subgraph group_extensions["packages/extensions"]
    pkg_client_ui_cordis["client-ui-cordis"]
    pkg_cordis_client_runner["cordis-client-runner"]
    pkg_cordis_host_runner["cordis-host-runner"]
    pkg_tool_cordis["tool-cordis"]
  end
  subgraph group_feedback["packages/feedback"]
    pkg_command_feedback["command-feedback"]
    pkg_message_feedback["message-feedback"]
  end
  subgraph group_guard["packages/guard"]
    pkg_repeat_tool_reminder["repeat-tool-reminder"]
    pkg_tool_call_timeout_policy["tool-call-timeout-policy"]
  end
  subgraph group_host["packages/host"]
    pkg_host_apiproxy["host-apiproxy"]
    pkg_host_directory_picker["host-directory-picker"]
    pkg_host_directory_picker_auto["host-directory-picker-auto"]
    pkg_host_directory_picker_browse["host-directory-picker-browse"]
    pkg_host_directory_picker_native["host-directory-picker-native"]
    pkg_host_frontend_static["host-frontend-static"]
    pkg_host_plugin_inventory["host-plugin-inventory"]
    pkg_host_webserver["host-webserver"]
  end
  subgraph group_identity["packages/identity"]
    pkg_anonymous_user_id["anonymous-user-id"]
  end
  subgraph group_interaction["packages/interaction"]
    pkg_commands["commands"]
    pkg_permission_presets["permission-presets"]
    pkg_tool_ask_user["tool-ask-user"]
    pkg_user_approval["user-approval"]
    pkg_user_questions["user-questions"]
  end
  subgraph group_jobs["packages/jobs"]
    pkg_jobs["jobs"]
    pkg_jobs_local["jobs-local"]
    pkg_tool_jobs["tool-jobs"]
  end
  subgraph group_lsp["packages/lsp"]
    pkg_lsp["lsp"]
    pkg_lsp_stdio["lsp-stdio"]
    pkg_tool_lsp["tool-lsp"]
  end
  subgraph group_mcp["packages/mcp"]
    pkg_mcp_client["mcp-client"]
  end
  subgraph group_preset["packages/preset"]
    pkg_agent_presets["agent-presets"]
    pkg_persona["persona"]
  end
  subgraph group_runtime_diagnostics["packages/runtime-diagnostics"]
    pkg_invariants["invariants"]
  end
  subgraph group_sandbox["packages/sandbox"]
    pkg_sandbox["sandbox"]
    pkg_sandbox_local["sandbox-local"]
    pkg_sandbox_policy["sandbox-policy"]
    pkg_sandbox_windows_acl["sandbox-windows-acl"]
  end
  subgraph group_schedule["packages/schedule"]
    pkg_schedule["schedule"]
  end
  subgraph group_sdk["packages/sdk"]
    pkg_sdk_client["sdk-client"]
    pkg_sdk_jsonrpc_server["sdk-jsonrpc-server"]
    pkg_sdk_protocol["sdk-protocol"]
  end
  subgraph group_session["packages/session"]
    pkg_session_checkpoint_policy["session-checkpoint-policy"]
    pkg_session_persistence["session-persistence"]
    pkg_session_persistence_jsonl["session-persistence-jsonl"]
    pkg_session_persistence_sqlite["session-persistence-sqlite"]
    pkg_session_projection["session-projection"]
    pkg_session_projection_cache["session-projection-cache"]
    pkg_session_stats["session-stats"]
    pkg_session_telemetry["session-telemetry"]
    pkg_session_telemetry_otel["session-telemetry-otel"]
    pkg_session_title["session-title"]
    pkg_session_title_all_prompts_llm["session-title-all-prompts-llm"]
    pkg_session_title_first_prompt_llm["session-title-first-prompt-llm"]
    pkg_session_title_llm["session-title-llm"]
  end
  subgraph group_settings["packages/settings"]
    pkg_settings["settings"]
    pkg_settings_file["settings-file"]
  end
  subgraph group_shell["packages/shell"]
    pkg_bash_local["bash-local"]
    pkg_bash_sandbox["bash-sandbox"]
    pkg_pwsh_local["pwsh-local"]
    pkg_pwsh_sandbox["pwsh-sandbox"]
    pkg_shell["shell"]
    pkg_shell_env["shell-env"]
    pkg_tool_bash["tool-bash"]
    pkg_tool_bash_persistent["tool-bash-persistent"]
    pkg_tool_pwsh["tool-pwsh"]
  end
  subgraph group_storage["packages/storage"]
    pkg_storage["storage"]
    pkg_storage_domain["storage-domain"]
    pkg_storage_json["storage-json"]
    pkg_storage_sqlite["storage-sqlite"]
  end
  subgraph group_subprocess["packages/subprocess"]
    pkg_subprocess["subprocess"]
    pkg_subprocess_local["subprocess-local"]
  end
  subgraph group_terminal["packages/terminal"]
    pkg_terminal["terminal"]
    pkg_terminal_bash["terminal-bash"]
    pkg_tool_terminal["tool-terminal"]
  end
  subgraph group_test_support["packages/test-support"]
    pkg_acp_snapshot["acp-snapshot"]
    pkg_agent_loop_testkit["agent-loop-testkit"]
    pkg_client_test_runtime["client-test-runtime"]
    pkg_llm_mock_server["llm-mock-server"]
    pkg_llm_replay["llm-replay"]
    pkg_loader_smoke["loader-smoke"]
  end
  subgraph group_typert["packages/typert"]
    pkg_typert_generator["typert-generator"]
    pkg_typert_loader["typert-loader"]
    pkg_typert_protocol["typert-protocol"]
    pkg_typert_registry["typert-registry"]
  end
  subgraph group_workflow["packages/workflow"]
    pkg_tool_ralph["tool-ralph"]
    pkg_tool_workflow["tool-workflow"]
    pkg_workflow["workflow"]
    pkg_workflow_worker_thread["workflow-worker-thread"]
  end
  subgraph group_workspace["packages/workspace"]
    pkg_workspace["workspace"]
  end
  pkg_atomic_write --> pkg_invariants
  pkg_brand --> pkg_invariants
  pkg_home_paths --> pkg_invariants
  pkg_launch_environment --> pkg_invariants
  pkg_native_command --> pkg_invariants
  pkg_output_retention --> pkg_invariants
  pkg_timeout --> pkg_invariants
  pkg_scope --> pkg_invariants
  pkg_cmdline --> pkg_invariants
  pkg_base --> pkg_invariants
  pkg_client_modules --> pkg_invariants
  pkg_client_schema_form --> pkg_invariants
  pkg_client_ui_attachment --> pkg_invariants
  pkg_client_ui_primitives --> pkg_invariants
  pkg_client_ui_slots --> pkg_invariants
  pkg_client_web --> pkg_invariants
  pkg_client_web_react --> pkg_invariants
  pkg_code_runtime --> pkg_invariants
  pkg_e2b --> pkg_invariants
  pkg_sdk_jsonrpc_demo --> pkg_invariants
  pkg_host_directory_picker --> pkg_invariants
  pkg_host_directory_picker_browse --> pkg_invariants
  pkg_host_directory_picker_native --> pkg_invariants
  pkg_host_webserver --> pkg_invariants
  pkg_sandbox_windows_acl --> pkg_invariants
  pkg_storage --> pkg_invariants
  pkg_subprocess --> pkg_invariants
  pkg_llm_mock_server --> pkg_invariants
  pkg_typert_generator --> pkg_invariants
  pkg_typert_protocol --> pkg_invariants
  pkg_typert_registry --> pkg_invariants
  pkg_attachment --> pkg_brand
  pkg_attachment --> pkg_invariants
  pkg_client_connection --> pkg_host_webserver
  pkg_client_connection --> pkg_invariants
  pkg_client_hmr --> pkg_client_modules
  pkg_client_hmr --> pkg_host_webserver
  pkg_client_hmr --> pkg_invariants
  pkg_credentials --> pkg_brand
  pkg_credentials --> pkg_invariants
  pkg_subprocess_e2b --> pkg_e2b
  pkg_subprocess_e2b --> pkg_invariants
  pkg_subprocess_e2b --> pkg_subprocess
  pkg_subprocess_e2b --> pkg_timeout
  pkg_host_frontend_static --> pkg_host_webserver
  pkg_host_frontend_static --> pkg_invariants
  pkg_host_plugin_inventory --> pkg_brand
  pkg_host_plugin_inventory --> pkg_invariants
  pkg_host_plugin_inventory --> pkg_typert_protocol
  pkg_anonymous_user_id --> pkg_brand
  pkg_anonymous_user_id --> pkg_home_paths
  pkg_anonymous_user_id --> pkg_invariants
  pkg_settings --> pkg_brand
  pkg_settings --> pkg_invariants
  pkg_storage_domain --> pkg_invariants
  pkg_storage_domain --> pkg_storage
  pkg_storage_json --> pkg_invariants
  pkg_storage_json --> pkg_storage
  pkg_storage_sqlite --> pkg_invariants
  pkg_storage_sqlite --> pkg_storage
  pkg_subprocess_local --> pkg_invariants
  pkg_subprocess_local --> pkg_subprocess
  pkg_subprocess_local --> pkg_timeout
  pkg_typert_loader --> pkg_invariants
  pkg_typert_loader --> pkg_typert_registry
  pkg_llm --> pkg_attachment
  pkg_llm --> pkg_brand
  pkg_llm --> pkg_invariants
  pkg_llm --> pkg_timeout
  pkg_api_gateway --> pkg_client_connection
  pkg_api_gateway --> pkg_invariants
  pkg_api_gateway --> pkg_typert_registry
  pkg_attachment_local --> pkg_attachment
  pkg_attachment_local --> pkg_home_paths
  pkg_attachment_local --> pkg_invariants
  pkg_credentials_local --> pkg_atomic_write
  pkg_credentials_local --> pkg_credentials
  pkg_credentials_local --> pkg_home_paths
  pkg_credentials_local --> pkg_invariants
  pkg_credentials_local --> pkg_launch_environment
  pkg_settings_file --> pkg_atomic_write
  pkg_settings_file --> pkg_home_paths
  pkg_settings_file --> pkg_invariants
  pkg_settings_file --> pkg_settings
  pkg_llm_deepseek --> pkg_anonymous_user_id
  pkg_llm_deepseek --> pkg_credentials
  pkg_llm_deepseek --> pkg_invariants
  pkg_llm_deepseek --> pkg_launch_environment
  pkg_llm_deepseek --> pkg_llm
  pkg_llm_deepseek --> pkg_settings
  pkg_llm_deepseek --> pkg_timeout
  pkg_llm_pi_ai --> pkg_attachment
  pkg_llm_pi_ai --> pkg_credentials
  pkg_llm_pi_ai --> pkg_invariants
  pkg_llm_pi_ai --> pkg_launch_environment
  pkg_llm_pi_ai --> pkg_llm
  pkg_llm_pi_ai --> pkg_settings
  pkg_llm_pi_ai --> pkg_timeout
  pkg_session --> pkg_brand
  pkg_session --> pkg_invariants
  pkg_session --> pkg_llm
  pkg_session --> pkg_scope
  pkg_session --> pkg_typert_protocol
  pkg_system_prompt --> pkg_invariants
  pkg_system_prompt --> pkg_llm
  pkg_system_prompt --> pkg_scope
  pkg_skill --> pkg_invariants
  pkg_skill --> pkg_llm
  pkg_skill --> pkg_scope
  pkg_web --> pkg_invariants
  pkg_web --> pkg_llm
  pkg_lsp --> pkg_brand
  pkg_lsp --> pkg_invariants
  pkg_lsp --> pkg_llm
  pkg_agent --> pkg_invariants
  pkg_agent --> pkg_llm
  pkg_agent --> pkg_scope
  pkg_agent --> pkg_session
  pkg_agent --> pkg_system_prompt
  pkg_agent --> pkg_typert_protocol
  pkg_skill_badge --> pkg_invariants
  pkg_skill_badge --> pkg_skill
  pkg_web_fetch_http --> pkg_invariants
  pkg_web_fetch_http --> pkg_timeout
  pkg_web_fetch_http --> pkg_web
  pkg_web_search_exa --> pkg_invariants
  pkg_web_search_exa --> pkg_launch_environment
  pkg_web_search_exa --> pkg_web
  pkg_web_search_perplexity --> pkg_invariants
  pkg_web_search_perplexity --> pkg_launch_environment
  pkg_web_search_perplexity --> pkg_web
  pkg_spill --> pkg_brand
  pkg_spill --> pkg_invariants
  pkg_spill --> pkg_llm
  pkg_spill --> pkg_session
  pkg_app_boot --> pkg_home_paths
  pkg_app_boot --> pkg_invariants
  pkg_app_boot --> pkg_launch_environment
  pkg_app_boot --> pkg_system_prompt
  pkg_code_runtime_worker_thread --> pkg_code_runtime
  pkg_code_runtime_worker_thread --> pkg_invariants
  pkg_code_runtime_worker_thread --> pkg_session
  pkg_code_runtime_worker_thread --> pkg_timeout
  pkg_persona --> pkg_invariants
  pkg_persona --> pkg_system_prompt
  pkg_sandbox --> pkg_invariants
  pkg_sandbox --> pkg_llm
  pkg_sandbox --> pkg_session
  pkg_session_persistence --> pkg_brand
  pkg_session_persistence --> pkg_invariants
  pkg_session_persistence --> pkg_session
  pkg_session_persistence --> pkg_timeout
  pkg_session_projection --> pkg_invariants
  pkg_session_projection --> pkg_session
  pkg_acp_snapshot --> pkg_invariants
  pkg_acp_snapshot --> pkg_session
  pkg_llm_retry --> pkg_agent
  pkg_llm_retry --> pkg_brand
  pkg_llm_retry --> pkg_invariants
  pkg_llm_retry --> pkg_llm
  pkg_llm_retry --> pkg_session
  pkg_llm_retry --> pkg_timeout
  pkg_agent_default_model --> pkg_agent
  pkg_agent_default_model --> pkg_invariants
  pkg_agent_default_model --> pkg_llm
  pkg_agent_default_model --> pkg_settings
  pkg_goal --> pkg_agent
  pkg_goal --> pkg_brand
  pkg_goal --> pkg_invariants
  pkg_goal --> pkg_llm
  pkg_goal --> pkg_scope
  pkg_goal --> pkg_session
  pkg_goal --> pkg_session_projection
  pkg_goal --> pkg_typert_protocol
  pkg_fs --> pkg_brand
  pkg_fs --> pkg_invariants
  pkg_fs --> pkg_llm
  pkg_fs --> pkg_sandbox
  pkg_web_search_deepseek --> pkg_agent
  pkg_web_search_deepseek --> pkg_credentials
  pkg_web_search_deepseek --> pkg_invariants
  pkg_web_search_deepseek --> pkg_launch_environment
  pkg_web_search_deepseek --> pkg_session
  pkg_web_search_deepseek --> pkg_settings
  pkg_web_search_deepseek --> pkg_web
  pkg_spill_local --> pkg_invariants
  pkg_spill_local --> pkg_spill
  pkg_time_context --> pkg_agent
  pkg_time_context --> pkg_invariants
  pkg_time_context --> pkg_session
  pkg_message_feedback --> pkg_brand
  pkg_message_feedback --> pkg_invariants
  pkg_message_feedback --> pkg_llm
  pkg_message_feedback --> pkg_session
  pkg_message_feedback --> pkg_session_persistence
  pkg_message_feedback --> pkg_storage_domain
  pkg_message_feedback --> pkg_typert_protocol
  pkg_commands --> pkg_agent
  pkg_commands --> pkg_brand
  pkg_commands --> pkg_invariants
  pkg_commands --> pkg_scope
  pkg_commands --> pkg_session
  pkg_commands --> pkg_typert_protocol
  pkg_user_approval --> pkg_agent
  pkg_user_approval --> pkg_brand
  pkg_user_approval --> pkg_invariants
  pkg_user_approval --> pkg_llm
  pkg_user_approval --> pkg_scope
  pkg_user_approval --> pkg_session
  pkg_user_approval --> pkg_system_prompt
  pkg_user_questions --> pkg_agent
  pkg_user_questions --> pkg_invariants
  pkg_user_questions --> pkg_llm
  pkg_jobs --> pkg_agent
  pkg_jobs --> pkg_brand
  pkg_jobs --> pkg_invariants
  pkg_jobs --> pkg_session
  pkg_agent_presets --> pkg_agent
  pkg_agent_presets --> pkg_atomic_write
  pkg_agent_presets --> pkg_home_paths
  pkg_agent_presets --> pkg_invariants
  pkg_agent_presets --> pkg_scope
  pkg_agent_presets --> pkg_session
  pkg_agent_presets --> pkg_settings
  pkg_agent_presets --> pkg_system_prompt
  pkg_sandbox_local --> pkg_invariants
  pkg_sandbox_local --> pkg_llm
  pkg_sandbox_local --> pkg_sandbox
  pkg_sandbox_local --> pkg_session
  pkg_sandbox_policy --> pkg_agent
  pkg_sandbox_policy --> pkg_invariants
  pkg_sandbox_policy --> pkg_sandbox
  pkg_sandbox_policy --> pkg_session
  pkg_sandbox_policy --> pkg_system_prompt
  pkg_session_persistence_jsonl --> pkg_invariants
  pkg_session_persistence_jsonl --> pkg_session
  pkg_session_persistence_jsonl --> pkg_session_persistence
  pkg_session_persistence_sqlite --> pkg_invariants
  pkg_session_persistence_sqlite --> pkg_session
  pkg_session_persistence_sqlite --> pkg_session_persistence
  pkg_session_projection_cache --> pkg_invariants
  pkg_session_projection_cache --> pkg_session
  pkg_session_projection_cache --> pkg_session_persistence
  pkg_session_projection_cache --> pkg_session_projection
  pkg_session_projection_cache --> pkg_storage_domain
  pkg_session_stats --> pkg_invariants
  pkg_session_stats --> pkg_llm
  pkg_session_stats --> pkg_session
  pkg_session_stats --> pkg_session_projection
  pkg_session_telemetry --> pkg_agent
  pkg_session_telemetry --> pkg_invariants
  pkg_session_telemetry --> pkg_session
  pkg_session_title --> pkg_brand
  pkg_session_title --> pkg_invariants
  pkg_session_title --> pkg_llm
  pkg_session_title --> pkg_session
  pkg_session_title --> pkg_session_projection
  pkg_shell --> pkg_invariants
  pkg_shell --> pkg_sandbox
  pkg_shell --> pkg_settings
  pkg_shell --> pkg_subprocess
  pkg_terminal --> pkg_agent
  pkg_terminal --> pkg_brand
  pkg_terminal --> pkg_invariants
  pkg_loader_smoke --> pkg_agent
  pkg_loader_smoke --> pkg_invariants
  pkg_loader_smoke --> pkg_llm
  pkg_loader_smoke --> pkg_session
  pkg_workflow --> pkg_agent
  pkg_workflow --> pkg_brand
  pkg_workflow --> pkg_invariants
  pkg_workflow --> pkg_llm
  pkg_workflow --> pkg_session
  pkg_workspace --> pkg_brand
  pkg_workspace --> pkg_invariants
  pkg_workspace --> pkg_session
  pkg_workspace --> pkg_session_persistence
  pkg_workspace --> pkg_storage
  pkg_workspace --> pkg_storage_domain
  pkg_tools --> pkg_agent
  pkg_tools --> pkg_code_runtime
  pkg_tools --> pkg_invariants
  pkg_tools --> pkg_llm
  pkg_tools --> pkg_scope
  pkg_tools --> pkg_session
  pkg_tools --> pkg_system_prompt
  pkg_tools --> pkg_user_approval
  pkg_command_goal --> pkg_commands
  pkg_command_goal --> pkg_goal
  pkg_command_goal --> pkg_invariants
  pkg_goal_round_driver --> pkg_agent
  pkg_goal_round_driver --> pkg_goal
  pkg_goal_round_driver --> pkg_invariants
  pkg_goal_round_driver --> pkg_llm
  pkg_goal_round_driver --> pkg_session
  pkg_fs_local --> pkg_fs
  pkg_fs_local --> pkg_invariants
  pkg_fs_observation_policy --> pkg_fs
  pkg_fs_observation_policy --> pkg_invariants
  pkg_skill_filesystem --> pkg_fs
  pkg_skill_filesystem --> pkg_home_paths
  pkg_skill_filesystem --> pkg_invariants
  pkg_skill_filesystem --> pkg_skill
  pkg_hook_protocol --> pkg_invariants
  pkg_hook_protocol --> pkg_session
  pkg_hook_protocol --> pkg_shell
  pkg_session_query --> pkg_brand
  pkg_session_query --> pkg_invariants
  pkg_session_query --> pkg_llm
  pkg_session_query --> pkg_session
  pkg_session_query --> pkg_session_persistence
  pkg_session_query --> pkg_session_title
  pkg_acp --> pkg_agent
  pkg_acp --> pkg_invariants
  pkg_acp --> pkg_session
  pkg_acp --> pkg_user_approval
  pkg_headless --> pkg_agent
  pkg_headless --> pkg_agent_default_model
  pkg_headless --> pkg_invariants
  pkg_headless --> pkg_llm
  pkg_headless --> pkg_session
  pkg_compaction --> pkg_brand
  pkg_compaction --> pkg_commands
  pkg_compaction --> pkg_invariants
  pkg_compaction --> pkg_llm
  pkg_compaction --> pkg_session
  pkg_tmux_context --> pkg_agent
  pkg_tmux_context --> pkg_invariants
  pkg_tmux_context --> pkg_session
  pkg_tmux_context --> pkg_shell
  pkg_fs_e2b --> pkg_e2b
  pkg_fs_e2b --> pkg_fs
  pkg_fs_e2b --> pkg_invariants
  pkg_command_feedback --> pkg_anonymous_user_id
  pkg_command_feedback --> pkg_commands
  pkg_command_feedback --> pkg_invariants
  pkg_command_feedback --> pkg_session
  pkg_command_feedback --> pkg_session_telemetry
  pkg_permission_presets --> pkg_commands
  pkg_permission_presets --> pkg_invariants
  pkg_permission_presets --> pkg_sandbox
  pkg_permission_presets --> pkg_sandbox_policy
  pkg_permission_presets --> pkg_session
  pkg_permission_presets --> pkg_session_projection
  pkg_permission_presets --> pkg_settings
  pkg_permission_presets --> pkg_shell
  pkg_permission_presets --> pkg_user_approval
  pkg_jobs_local --> pkg_agent
  pkg_jobs_local --> pkg_invariants
  pkg_jobs_local --> pkg_jobs
  pkg_jobs_local --> pkg_scope
  pkg_jobs_local --> pkg_timeout
  pkg_lsp_stdio --> pkg_brand
  pkg_lsp_stdio --> pkg_fs
  pkg_lsp_stdio --> pkg_invariants
  pkg_lsp_stdio --> pkg_llm
  pkg_lsp_stdio --> pkg_lsp
  pkg_lsp_stdio --> pkg_subprocess
  pkg_lsp_stdio --> pkg_timeout
  pkg_session_title_llm --> pkg_invariants
  pkg_session_title_llm --> pkg_llm
  pkg_session_title_llm --> pkg_session
  pkg_session_title_llm --> pkg_session_title
  pkg_session_title_llm --> pkg_timeout
  pkg_bash_local --> pkg_invariants
  pkg_bash_local --> pkg_settings
  pkg_bash_local --> pkg_shell
  pkg_bash_local --> pkg_subprocess
  pkg_bash_local --> pkg_timeout
  pkg_pwsh_local --> pkg_invariants
  pkg_pwsh_local --> pkg_settings
  pkg_pwsh_local --> pkg_shell
  pkg_pwsh_local --> pkg_subprocess
  pkg_pwsh_local --> pkg_timeout
  pkg_terminal_bash --> pkg_agent
  pkg_terminal_bash --> pkg_invariants
  pkg_terminal_bash --> pkg_sandbox
  pkg_terminal_bash --> pkg_sandbox_policy
  pkg_terminal_bash --> pkg_session
  pkg_terminal_bash --> pkg_subprocess
  pkg_terminal_bash --> pkg_terminal
  pkg_token_meter --> pkg_compaction
  pkg_token_meter --> pkg_invariants
  pkg_token_meter --> pkg_llm
  pkg_token_meter --> pkg_session
  pkg_token_meter --> pkg_session_projection
  pkg_agent_loop --> pkg_agent
  pkg_agent_loop --> pkg_invariants
  pkg_agent_loop --> pkg_llm
  pkg_agent_loop --> pkg_scope
  pkg_agent_loop --> pkg_session
  pkg_agent_loop --> pkg_session_persistence
  pkg_agent_loop --> pkg_settings
  pkg_agent_loop --> pkg_system_prompt
  pkg_agent_loop --> pkg_tools
  pkg_agent_tool_presentation --> pkg_invariants
  pkg_agent_tool_presentation --> pkg_tools
  pkg_tool_goal --> pkg_agent
  pkg_tool_goal --> pkg_goal
  pkg_tool_goal --> pkg_invariants
  pkg_tool_goal --> pkg_llm
  pkg_tool_goal --> pkg_session
  pkg_tool_goal --> pkg_system_prompt
  pkg_tool_goal --> pkg_tools
  pkg_fs_sandbox --> pkg_fs
  pkg_fs_sandbox --> pkg_fs_local
  pkg_fs_sandbox --> pkg_invariants
  pkg_fs_sandbox --> pkg_sandbox
  pkg_fs_sandbox --> pkg_sandbox_policy
  pkg_tool_fs --> pkg_attachment
  pkg_tool_fs --> pkg_fs
  pkg_tool_fs --> pkg_invariants
  pkg_tool_fs --> pkg_llm
  pkg_tool_fs --> pkg_sandbox
  pkg_tool_fs --> pkg_sandbox_policy
  pkg_tool_fs --> pkg_session
  pkg_tool_fs --> pkg_system_prompt
  pkg_tool_fs --> pkg_tools
  pkg_tool_fs --> pkg_user_approval
  pkg_tool_fs_search --> pkg_invariants
  pkg_tool_fs_search --> pkg_llm
  pkg_tool_fs_search --> pkg_output_retention
  pkg_tool_fs_search --> pkg_session
  pkg_tool_fs_search --> pkg_spill
  pkg_tool_fs_search --> pkg_subprocess
  pkg_tool_fs_search --> pkg_system_prompt
  pkg_tool_fs_search --> pkg_timeout
  pkg_tool_fs_search --> pkg_tools
  pkg_tool_str_replace_editor --> pkg_fs
  pkg_tool_str_replace_editor --> pkg_invariants
  pkg_tool_str_replace_editor --> pkg_sandbox
  pkg_tool_str_replace_editor --> pkg_sandbox_policy
  pkg_tool_str_replace_editor --> pkg_tools
  pkg_tool_skill --> pkg_agent
  pkg_tool_skill --> pkg_invariants
  pkg_tool_skill --> pkg_llm
  pkg_tool_skill --> pkg_skill
  pkg_tool_skill --> pkg_tools
  pkg_subagent --> pkg_agent
  pkg_subagent --> pkg_agent_presets
  pkg_subagent --> pkg_brand
  pkg_subagent --> pkg_invariants
  pkg_subagent --> pkg_jobs
  pkg_subagent --> pkg_llm
  pkg_subagent --> pkg_sandbox
  pkg_subagent --> pkg_sandbox_policy
  pkg_subagent --> pkg_scope
  pkg_subagent --> pkg_session
  pkg_subagent --> pkg_session_persistence
  pkg_subagent --> pkg_session_projection
  pkg_subagent --> pkg_session_projection_cache
  pkg_subagent --> pkg_tools
  pkg_subagent --> pkg_user_approval
  pkg_tool_web --> pkg_invariants
  pkg_tool_web --> pkg_llm
  pkg_tool_web --> pkg_system_prompt
  pkg_tool_web --> pkg_tools
  pkg_tool_web --> pkg_web
  pkg_spill_policy --> pkg_invariants
  pkg_spill_policy --> pkg_llm
  pkg_spill_policy --> pkg_output_retention
  pkg_spill_policy --> pkg_session
  pkg_spill_policy --> pkg_spill
  pkg_spill_policy --> pkg_tools
  pkg_tool_todo --> pkg_agent
  pkg_tool_todo --> pkg_invariants
  pkg_tool_todo --> pkg_session
  pkg_tool_todo --> pkg_session_projection
  pkg_tool_todo --> pkg_tools
  pkg_plan_mode --> pkg_agent
  pkg_plan_mode --> pkg_commands
  pkg_plan_mode --> pkg_invariants
  pkg_plan_mode --> pkg_llm
  pkg_plan_mode --> pkg_session
  pkg_plan_mode --> pkg_session_projection
  pkg_plan_mode --> pkg_system_prompt
  pkg_plan_mode --> pkg_tools
  pkg_plan_mode --> pkg_user_questions
  pkg_hooks_codex --> pkg_agent
  pkg_hooks_codex --> pkg_hook_protocol
  pkg_hooks_codex --> pkg_invariants
  pkg_hooks_codex --> pkg_llm
  pkg_hooks_codex --> pkg_session
  pkg_hooks_codex --> pkg_session_persistence
  pkg_hooks_codex --> pkg_tools
  pkg_session_query_sqlite --> pkg_invariants
  pkg_session_query_sqlite --> pkg_session
  pkg_session_query_sqlite --> pkg_session_persistence
  pkg_session_query_sqlite --> pkg_session_query
  pkg_tool_session_query --> pkg_invariants
  pkg_tool_session_query --> pkg_llm
  pkg_tool_session_query --> pkg_session
  pkg_tool_session_query --> pkg_session_query
  pkg_tool_session_query --> pkg_system_prompt
  pkg_tool_session_query --> pkg_timeout
  pkg_tool_session_query --> pkg_tools
  pkg_command_compact --> pkg_commands
  pkg_command_compact --> pkg_compaction
  pkg_command_compact --> pkg_invariants
  pkg_agent_instructions --> pkg_agent
  pkg_agent_instructions --> pkg_fs
  pkg_agent_instructions --> pkg_home_paths
  pkg_agent_instructions --> pkg_invariants
  pkg_agent_instructions --> pkg_llm
  pkg_agent_instructions --> pkg_session
  pkg_agent_instructions --> pkg_tools
  pkg_session_reference --> pkg_agent
  pkg_session_reference --> pkg_compaction
  pkg_session_reference --> pkg_invariants
  pkg_session_reference --> pkg_llm
  pkg_session_reference --> pkg_output_retention
  pkg_session_reference --> pkg_session
  pkg_session_reference --> pkg_session_query
  pkg_cordis_host_runner --> pkg_agent
  pkg_cordis_host_runner --> pkg_brand
  pkg_cordis_host_runner --> pkg_invariants
  pkg_cordis_host_runner --> pkg_llm
  pkg_cordis_host_runner --> pkg_scope
  pkg_cordis_host_runner --> pkg_session
  pkg_cordis_host_runner --> pkg_tools
  pkg_cordis_host_runner --> pkg_typert_protocol
  pkg_repeat_tool_reminder --> pkg_agent
  pkg_repeat_tool_reminder --> pkg_invariants
  pkg_repeat_tool_reminder --> pkg_tools
  pkg_tool_call_timeout_policy --> pkg_invariants
  pkg_tool_call_timeout_policy --> pkg_llm
  pkg_tool_call_timeout_policy --> pkg_timeout
  pkg_tool_call_timeout_policy --> pkg_tools
  pkg_tool_ask_user --> pkg_agent
  pkg_tool_ask_user --> pkg_invariants
  pkg_tool_ask_user --> pkg_tools
  pkg_tool_ask_user --> pkg_user_questions
  pkg_tool_jobs --> pkg_agent
  pkg_tool_jobs --> pkg_invariants
  pkg_tool_jobs --> pkg_jobs
  pkg_tool_jobs --> pkg_llm
  pkg_tool_jobs --> pkg_output_retention
  pkg_tool_jobs --> pkg_system_prompt
  pkg_tool_jobs --> pkg_tools
  pkg_tool_lsp --> pkg_invariants
  pkg_tool_lsp --> pkg_llm
  pkg_tool_lsp --> pkg_lsp
  pkg_tool_lsp --> pkg_system_prompt
  pkg_tool_lsp --> pkg_timeout
  pkg_tool_lsp --> pkg_tools
  pkg_mcp_client --> pkg_invariants
  pkg_mcp_client --> pkg_llm
  pkg_mcp_client --> pkg_subprocess
  pkg_mcp_client --> pkg_timeout
  pkg_mcp_client --> pkg_tools
  pkg_schedule --> pkg_agent
  pkg_schedule --> pkg_brand
  pkg_schedule --> pkg_invariants
  pkg_schedule --> pkg_llm
  pkg_schedule --> pkg_session
  pkg_schedule --> pkg_session_persistence
  pkg_schedule --> pkg_tools
  pkg_session_checkpoint_policy --> pkg_agent
  pkg_session_checkpoint_policy --> pkg_invariants
  pkg_session_checkpoint_policy --> pkg_llm
  pkg_session_checkpoint_policy --> pkg_session
  pkg_session_checkpoint_policy --> pkg_session_persistence
  pkg_session_checkpoint_policy --> pkg_tools
  pkg_session_telemetry_otel --> pkg_anonymous_user_id
  pkg_session_telemetry_otel --> pkg_command_feedback
  pkg_session_telemetry_otel --> pkg_invariants
  pkg_session_telemetry_otel --> pkg_llm
  pkg_session_telemetry_otel --> pkg_session
  pkg_session_telemetry_otel --> pkg_session_telemetry
  pkg_session_title_all_prompts_llm --> pkg_invariants
  pkg_session_title_all_prompts_llm --> pkg_llm
  pkg_session_title_all_prompts_llm --> pkg_session
  pkg_session_title_all_prompts_llm --> pkg_session_title
  pkg_session_title_all_prompts_llm --> pkg_session_title_llm
  pkg_session_title_first_prompt_llm --> pkg_invariants
  pkg_session_title_first_prompt_llm --> pkg_llm
  pkg_session_title_first_prompt_llm --> pkg_session
  pkg_session_title_first_prompt_llm --> pkg_session_title
  pkg_session_title_first_prompt_llm --> pkg_session_title_llm
  pkg_bash_sandbox --> pkg_bash_local
  pkg_bash_sandbox --> pkg_invariants
  pkg_bash_sandbox --> pkg_sandbox
  pkg_bash_sandbox --> pkg_sandbox_policy
  pkg_bash_sandbox --> pkg_shell
  pkg_pwsh_sandbox --> pkg_invariants
  pkg_pwsh_sandbox --> pkg_pwsh_local
  pkg_pwsh_sandbox --> pkg_sandbox
  pkg_pwsh_sandbox --> pkg_sandbox_policy
  pkg_pwsh_sandbox --> pkg_shell
  pkg_shell_env --> pkg_home_paths
  pkg_shell_env --> pkg_invariants
  pkg_shell_env --> pkg_session_persistence
  pkg_shell_env --> pkg_shell
  pkg_shell_env --> pkg_tools
  pkg_tool_bash_persistent --> pkg_agent
  pkg_tool_bash_persistent --> pkg_invariants
  pkg_tool_bash_persistent --> pkg_terminal
  pkg_tool_bash_persistent --> pkg_timeout
  pkg_tool_bash_persistent --> pkg_tools
  pkg_tool_terminal --> pkg_agent
  pkg_tool_terminal --> pkg_invariants
  pkg_tool_terminal --> pkg_jobs
  pkg_tool_terminal --> pkg_llm
  pkg_tool_terminal --> pkg_output_retention
  pkg_tool_terminal --> pkg_system_prompt
  pkg_tool_terminal --> pkg_terminal
  pkg_tool_terminal --> pkg_tools
  pkg_agent_loop_testkit --> pkg_agent
  pkg_agent_loop_testkit --> pkg_invariants
  pkg_agent_loop_testkit --> pkg_llm
  pkg_agent_loop_testkit --> pkg_session
  pkg_agent_loop_testkit --> pkg_system_prompt
  pkg_agent_loop_testkit --> pkg_tools
  pkg_llm_replay --> pkg_compaction
  pkg_llm_replay --> pkg_invariants
  pkg_llm_replay --> pkg_llm
  pkg_llm_replay --> pkg_session
  pkg_tool_workflow --> pkg_agent
  pkg_tool_workflow --> pkg_invariants
  pkg_tool_workflow --> pkg_llm
  pkg_tool_workflow --> pkg_session
  pkg_tool_workflow --> pkg_system_prompt
  pkg_tool_workflow --> pkg_tools
  pkg_tool_workflow --> pkg_workflow
  pkg_subagent_acp --> pkg_agent
  pkg_subagent_acp --> pkg_invariants
  pkg_subagent_acp --> pkg_llm
  pkg_subagent_acp --> pkg_session
  pkg_subagent_acp --> pkg_subagent
  pkg_subagent_acp --> pkg_subprocess
  pkg_subagent_acp --> pkg_timeout
  pkg_subagent_claude_code --> pkg_invariants
  pkg_subagent_claude_code --> pkg_llm
  pkg_subagent_claude_code --> pkg_session
  pkg_subagent_claude_code --> pkg_subagent
  pkg_subagent_claude_code --> pkg_subprocess
  pkg_subagent_claude_code --> pkg_timeout
  pkg_subagent_in_process_driver --> pkg_agent
  pkg_subagent_in_process_driver --> pkg_invariants
  pkg_subagent_in_process_driver --> pkg_llm
  pkg_subagent_in_process_driver --> pkg_session
  pkg_subagent_in_process_driver --> pkg_subagent
  pkg_subagent_in_process_driver --> pkg_system_prompt
  pkg_subagent_in_process_driver --> pkg_tools
  pkg_tool_subagent --> pkg_agent
  pkg_tool_subagent --> pkg_invariants
  pkg_tool_subagent --> pkg_jobs
  pkg_tool_subagent --> pkg_llm
  pkg_tool_subagent --> pkg_subagent
  pkg_tool_subagent --> pkg_system_prompt
  pkg_tool_subagent --> pkg_tools
  pkg_tool_subagent_control --> pkg_invariants
  pkg_tool_subagent_control --> pkg_llm
  pkg_tool_subagent_control --> pkg_session
  pkg_tool_subagent_control --> pkg_subagent
  pkg_tool_subagent_control --> pkg_tools
  pkg_tool_subagent_report --> pkg_invariants
  pkg_tool_subagent_report --> pkg_llm
  pkg_tool_subagent_report --> pkg_subagent
  pkg_tool_subagent_report --> pkg_system_prompt
  pkg_tool_subagent_report --> pkg_tools
  pkg_hooks_claude_code --> pkg_agent
  pkg_hooks_claude_code --> pkg_hook_protocol
  pkg_hooks_claude_code --> pkg_invariants
  pkg_hooks_claude_code --> pkg_llm
  pkg_hooks_claude_code --> pkg_session
  pkg_hooks_claude_code --> pkg_session_persistence
  pkg_hooks_claude_code --> pkg_subagent
  pkg_hooks_claude_code --> pkg_tools
  pkg_api_remotes --> pkg_agent
  pkg_api_remotes --> pkg_agent_presets
  pkg_api_remotes --> pkg_api_gateway
  pkg_api_remotes --> pkg_commands
  pkg_api_remotes --> pkg_cordis_host_runner
  pkg_api_remotes --> pkg_credentials
  pkg_api_remotes --> pkg_goal
  pkg_api_remotes --> pkg_host_plugin_inventory
  pkg_api_remotes --> pkg_invariants
  pkg_api_remotes --> pkg_llm
  pkg_api_remotes --> pkg_message_feedback
  pkg_api_remotes --> pkg_session
  pkg_api_remotes --> pkg_session_persistence
  pkg_api_remotes --> pkg_settings
  pkg_api_remotes --> pkg_typert_registry
  pkg_web_app --> pkg_invariants
  pkg_web_app --> pkg_shell_env
  pkg_web_app --> pkg_system_prompt
  pkg_compaction_tool_result_pruner --> pkg_compaction
  pkg_compaction_tool_result_pruner --> pkg_invariants
  pkg_compaction_tool_result_pruner --> pkg_llm
  pkg_compaction_tool_result_pruner --> pkg_session
  pkg_compaction_tool_result_pruner --> pkg_token_meter
  pkg_tool_cordis --> pkg_agent
  pkg_tool_cordis --> pkg_cordis_host_runner
  pkg_tool_cordis --> pkg_invariants
  pkg_tool_cordis --> pkg_llm
  pkg_tool_cordis --> pkg_scope
  pkg_tool_cordis --> pkg_session
  pkg_tool_cordis --> pkg_system_prompt
  pkg_tool_cordis --> pkg_tools
  pkg_host_apiproxy --> pkg_agent_presets
  pkg_host_apiproxy --> pkg_cordis_host_runner
  pkg_host_apiproxy --> pkg_invariants
  pkg_sdk_protocol --> pkg_invariants
  pkg_sdk_protocol --> pkg_llm
  pkg_sdk_protocol --> pkg_session
  pkg_sdk_protocol --> pkg_subagent
  pkg_tool_bash --> pkg_agent
  pkg_tool_bash --> pkg_invariants
  pkg_tool_bash --> pkg_jobs
  pkg_tool_bash --> pkg_llm
  pkg_tool_bash --> pkg_sandbox
  pkg_tool_bash --> pkg_sandbox_policy
  pkg_tool_bash --> pkg_shell
  pkg_tool_bash --> pkg_shell_env
  pkg_tool_bash --> pkg_system_prompt
  pkg_tool_bash --> pkg_tools
  pkg_tool_bash --> pkg_user_approval
  pkg_tool_pwsh --> pkg_agent
  pkg_tool_pwsh --> pkg_invariants
  pkg_tool_pwsh --> pkg_jobs
  pkg_tool_pwsh --> pkg_llm
  pkg_tool_pwsh --> pkg_sandbox
  pkg_tool_pwsh --> pkg_sandbox_policy
  pkg_tool_pwsh --> pkg_shell
  pkg_tool_pwsh --> pkg_shell_env
  pkg_tool_pwsh --> pkg_system_prompt
  pkg_tool_pwsh --> pkg_tools
  pkg_tool_pwsh --> pkg_user_approval
  pkg_tool_ralph --> pkg_agent
  pkg_tool_ralph --> pkg_invariants
  pkg_tool_ralph --> pkg_llm
  pkg_tool_ralph --> pkg_subagent
  pkg_tool_ralph --> pkg_system_prompt
  pkg_tool_ralph --> pkg_tools
  pkg_tool_ralph --> pkg_workflow
  pkg_workflow_worker_thread --> pkg_agent
  pkg_workflow_worker_thread --> pkg_brand
  pkg_workflow_worker_thread --> pkg_invariants
  pkg_workflow_worker_thread --> pkg_llm
  pkg_workflow_worker_thread --> pkg_session
  pkg_workflow_worker_thread --> pkg_subagent
  pkg_workflow_worker_thread --> pkg_tools
  pkg_workflow_worker_thread --> pkg_workflow
  pkg_subagent_codex --> pkg_invariants
  pkg_subagent_codex --> pkg_llm
  pkg_subagent_codex --> pkg_sdk_protocol
  pkg_subagent_codex --> pkg_session
  pkg_subagent_codex --> pkg_subagent
  pkg_subagent_codex --> pkg_subprocess
  pkg_subagent_codex --> pkg_timeout
  pkg_subagent_fork_in_process --> pkg_agent
  pkg_subagent_fork_in_process --> pkg_invariants
  pkg_subagent_fork_in_process --> pkg_session
  pkg_subagent_fork_in_process --> pkg_subagent
  pkg_subagent_fork_in_process --> pkg_subagent_in_process_driver
  pkg_subagent_spawn_in_process --> pkg_invariants
  pkg_subagent_spawn_in_process --> pkg_subagent
  pkg_subagent_spawn_in_process --> pkg_subagent_in_process_driver
  pkg_client_runtime --> pkg_api_remotes
  pkg_client_runtime --> pkg_invariants
  pkg_client_runtime --> pkg_typert_protocol
  pkg_client_runtime --> pkg_typert_registry
  pkg_compaction_basic --> pkg_agent
  pkg_compaction_basic --> pkg_commands
  pkg_compaction_basic --> pkg_compaction
  pkg_compaction_basic --> pkg_compaction_tool_result_pruner
  pkg_compaction_basic --> pkg_invariants
  pkg_compaction_basic --> pkg_llm
  pkg_compaction_basic --> pkg_session
  pkg_compaction_basic --> pkg_token_meter
  pkg_agent_spine_demo --> pkg_agent
  pkg_agent_spine_demo --> pkg_agent_instructions
  pkg_agent_spine_demo --> pkg_agent_loop
  pkg_agent_spine_demo --> pkg_goal
  pkg_agent_spine_demo --> pkg_goal_round_driver
  pkg_agent_spine_demo --> pkg_home_paths
  pkg_agent_spine_demo --> pkg_invariants
  pkg_agent_spine_demo --> pkg_jobs_local
  pkg_agent_spine_demo --> pkg_llm
  pkg_agent_spine_demo --> pkg_llm_retry
  pkg_agent_spine_demo --> pkg_scope
  pkg_agent_spine_demo --> pkg_session
  pkg_agent_spine_demo --> pkg_session_title
  pkg_agent_spine_demo --> pkg_shell_env
  pkg_agent_spine_demo --> pkg_skill
  pkg_agent_spine_demo --> pkg_skill_filesystem
  pkg_agent_spine_demo --> pkg_system_prompt
  pkg_agent_spine_demo --> pkg_tool_bash
  pkg_agent_spine_demo --> pkg_tool_goal
  pkg_agent_spine_demo --> pkg_tool_jobs
  pkg_agent_spine_demo --> pkg_tool_skill
  pkg_agent_spine_demo --> pkg_tools
  pkg_sdk_client --> pkg_invariants
  pkg_sdk_client --> pkg_llm
  pkg_sdk_client --> pkg_sdk_protocol
  pkg_sdk_client --> pkg_session
  pkg_sdk_jsonrpc_server --> pkg_agent
  pkg_sdk_jsonrpc_server --> pkg_invariants
  pkg_sdk_jsonrpc_server --> pkg_llm
  pkg_sdk_jsonrpc_server --> pkg_llm_deepseek
  pkg_sdk_jsonrpc_server --> pkg_scope
  pkg_sdk_jsonrpc_server --> pkg_sdk_protocol
  pkg_sdk_jsonrpc_server --> pkg_session
  pkg_sdk_jsonrpc_server --> pkg_subagent
  pkg_subagent_dsh_sdk --> pkg_agent
  pkg_subagent_dsh_sdk --> pkg_invariants
  pkg_subagent_dsh_sdk --> pkg_llm
  pkg_subagent_dsh_sdk --> pkg_sdk_client
  pkg_subagent_dsh_sdk --> pkg_session
  pkg_subagent_dsh_sdk --> pkg_subagent
  pkg_subagent_dsh_sdk --> pkg_subprocess
  pkg_client_ui_settings --> pkg_api_remotes
  pkg_client_ui_settings --> pkg_client_connection
  pkg_client_ui_settings --> pkg_client_runtime
  pkg_client_ui_settings --> pkg_client_schema_form
  pkg_client_ui_settings --> pkg_client_ui_slots
  pkg_client_ui_settings --> pkg_invariants
  pkg_client_ui_settings --> pkg_settings
  pkg_client_ui_settings_models --> pkg_api_remotes
  pkg_client_ui_settings_models --> pkg_client_connection
  pkg_client_ui_settings_models --> pkg_client_runtime
  pkg_client_ui_settings_models --> pkg_client_schema_form
  pkg_client_ui_settings_models --> pkg_client_ui_primitives
  pkg_client_ui_settings_models --> pkg_client_ui_slots
  pkg_client_ui_settings_models --> pkg_client_web_react
  pkg_client_ui_settings_models --> pkg_invariants
  pkg_acp_demo --> pkg_acp
  pkg_acp_demo --> pkg_agent_instructions
  pkg_acp_demo --> pkg_agent_spine_demo
  pkg_acp_demo --> pkg_app_boot
  pkg_acp_demo --> pkg_invariants
  pkg_acp_demo --> pkg_session_checkpoint_policy
  pkg_acp_demo --> pkg_session_persistence_jsonl
  pkg_acp_demo --> pkg_session_query
  pkg_acp_demo --> pkg_session_query_sqlite
  pkg_acp_demo --> pkg_tools
  pkg_client_test_runtime --> pkg_client_runtime
  pkg_client_test_runtime --> pkg_client_ui_slots
  pkg_client_test_runtime --> pkg_client_web_react
  pkg_client_test_runtime --> pkg_host_apiproxy
  pkg_client_test_runtime --> pkg_invariants
  pkg_client_locale --> pkg_api_remotes
  pkg_client_locale --> pkg_client_connection
  pkg_client_locale --> pkg_client_runtime
  pkg_client_locale --> pkg_client_ui_primitives
  pkg_client_locale --> pkg_client_ui_settings
  pkg_client_locale --> pkg_client_ui_slots
  pkg_client_locale --> pkg_invariants
  pkg_client_ui_input_trigger --> pkg_client_locale
  pkg_client_ui_input_trigger --> pkg_client_runtime
  pkg_client_ui_input_trigger --> pkg_client_ui_primitives
  pkg_client_ui_input_trigger --> pkg_client_ui_slots
  pkg_client_ui_input_trigger --> pkg_invariants
  pkg_client_ui_settings_plugin_inventory --> pkg_api_remotes
  pkg_client_ui_settings_plugin_inventory --> pkg_client_locale
  pkg_client_ui_settings_plugin_inventory --> pkg_client_runtime
  pkg_client_ui_settings_plugin_inventory --> pkg_client_ui_primitives
  pkg_client_ui_settings_plugin_inventory --> pkg_client_ui_settings
  pkg_client_ui_settings_plugin_inventory --> pkg_client_ui_slots
  pkg_client_ui_settings_plugin_inventory --> pkg_invariants
  pkg_client_ui_settings_plugins --> pkg_api_remotes
  pkg_client_ui_settings_plugins --> pkg_client_connection
  pkg_client_ui_settings_plugins --> pkg_client_locale
  pkg_client_ui_settings_plugins --> pkg_client_runtime
  pkg_client_ui_settings_plugins --> pkg_client_ui_primitives
  pkg_client_ui_settings_plugins --> pkg_client_ui_settings
  pkg_client_ui_settings_plugins --> pkg_client_ui_slots
  pkg_client_ui_settings_plugins --> pkg_client_web_react
  pkg_client_ui_settings_plugins --> pkg_invariants
  pkg_client_ui_sidebar --> pkg_client_locale
  pkg_client_ui_sidebar --> pkg_client_runtime
  pkg_client_ui_sidebar --> pkg_client_ui_primitives
  pkg_client_ui_sidebar --> pkg_client_ui_slots
  pkg_client_ui_sidebar --> pkg_invariants
  pkg_client_ui_theme --> pkg_api_remotes
  pkg_client_ui_theme --> pkg_client_connection
  pkg_client_ui_theme --> pkg_client_locale
  pkg_client_ui_theme --> pkg_client_runtime
  pkg_client_ui_theme --> pkg_client_ui_primitives
  pkg_client_ui_theme --> pkg_client_ui_settings
  pkg_client_ui_theme --> pkg_client_ui_slots
  pkg_client_ui_theme --> pkg_host_webserver
  pkg_client_ui_theme --> pkg_invariants
  pkg_client_ui_trajectory --> pkg_agent
  pkg_client_ui_trajectory --> pkg_client_locale
  pkg_client_ui_trajectory --> pkg_client_runtime
  pkg_client_ui_trajectory --> pkg_client_ui_primitives
  pkg_client_ui_trajectory --> pkg_compaction
  pkg_client_ui_trajectory --> pkg_invariants
  pkg_client_ui_trajectory --> pkg_tools
  pkg_client_ui_user_questions --> pkg_api_remotes
  pkg_client_ui_user_questions --> pkg_client_locale
  pkg_client_ui_user_questions --> pkg_invariants
  pkg_client_ui_workspace --> pkg_client_locale
  pkg_client_ui_workspace --> pkg_client_runtime
  pkg_client_ui_workspace --> pkg_client_ui_primitives
  pkg_client_ui_workspace --> pkg_client_ui_slots
  pkg_client_ui_workspace --> pkg_invariants
  pkg_client_ui_conversation --> pkg_agent
  pkg_client_ui_conversation --> pkg_api_remotes
  pkg_client_ui_conversation --> pkg_attachment
  pkg_client_ui_conversation --> pkg_brand
  pkg_client_ui_conversation --> pkg_client_connection
  pkg_client_ui_conversation --> pkg_client_locale
  pkg_client_ui_conversation --> pkg_client_runtime
  pkg_client_ui_conversation --> pkg_client_ui_attachment
  pkg_client_ui_conversation --> pkg_client_ui_input_trigger
  pkg_client_ui_conversation --> pkg_client_ui_primitives
  pkg_client_ui_conversation --> pkg_client_ui_settings
  pkg_client_ui_conversation --> pkg_client_ui_slots
  pkg_client_ui_conversation --> pkg_commands
  pkg_client_ui_conversation --> pkg_compaction
  pkg_client_ui_conversation --> pkg_invariants
  pkg_client_ui_conversation --> pkg_llm_retry
  pkg_client_ui_conversation --> pkg_session_stats
  pkg_client_ui_conversation --> pkg_token_meter
  pkg_client_ui_conversation --> pkg_tools
  pkg_client_ui_directory_picker_browse --> pkg_client_locale
  pkg_client_ui_directory_picker_browse --> pkg_client_runtime
  pkg_client_ui_directory_picker_browse --> pkg_client_ui_primitives
  pkg_client_ui_directory_picker_browse --> pkg_client_ui_slots
  pkg_client_ui_directory_picker_browse --> pkg_client_ui_workspace
  pkg_client_ui_directory_picker_browse --> pkg_invariants
  pkg_client_ui_directory_picker_native --> pkg_client_runtime
  pkg_client_ui_directory_picker_native --> pkg_client_ui_slots
  pkg_client_ui_directory_picker_native --> pkg_client_ui_workspace
  pkg_client_ui_directory_picker_native --> pkg_invariants
  pkg_client_ui_layout --> pkg_client_runtime
  pkg_client_ui_layout --> pkg_client_ui_slots
  pkg_client_ui_layout --> pkg_client_ui_theme
  pkg_client_ui_layout --> pkg_invariants
  pkg_client_ui_settings_general --> pkg_api_remotes
  pkg_client_ui_settings_general --> pkg_client_connection
  pkg_client_ui_settings_general --> pkg_client_locale
  pkg_client_ui_settings_general --> pkg_client_runtime
  pkg_client_ui_settings_general --> pkg_client_ui_primitives
  pkg_client_ui_settings_general --> pkg_client_ui_settings
  pkg_client_ui_settings_general --> pkg_client_ui_sidebar
  pkg_client_ui_settings_general --> pkg_client_ui_slots
  pkg_client_ui_settings_general --> pkg_client_web_react
  pkg_client_ui_settings_general --> pkg_invariants
  pkg_cordis_client_runner --> pkg_api_remotes
  pkg_cordis_client_runner --> pkg_client_connection
  pkg_cordis_client_runner --> pkg_client_modules
  pkg_cordis_client_runner --> pkg_client_runtime
  pkg_cordis_client_runner --> pkg_client_ui_slots
  pkg_cordis_client_runner --> pkg_client_ui_theme
  pkg_cordis_client_runner --> pkg_invariants
  pkg_client_ui_agent_preset --> pkg_api_remotes
  pkg_client_ui_agent_preset --> pkg_client_connection
  pkg_client_ui_agent_preset --> pkg_client_locale
  pkg_client_ui_agent_preset --> pkg_client_runtime
  pkg_client_ui_agent_preset --> pkg_client_ui_conversation
  pkg_client_ui_agent_preset --> pkg_client_ui_primitives
  pkg_client_ui_agent_preset --> pkg_client_ui_settings
  pkg_client_ui_agent_preset --> pkg_client_ui_slots
  pkg_client_ui_agent_preset --> pkg_client_web_react
  pkg_client_ui_agent_preset --> pkg_invariants
  pkg_client_ui_commands --> pkg_api_remotes
  pkg_client_ui_commands --> pkg_client_locale
  pkg_client_ui_commands --> pkg_client_runtime
  pkg_client_ui_commands --> pkg_client_ui_conversation
  pkg_client_ui_commands --> pkg_client_ui_input_trigger
  pkg_client_ui_commands --> pkg_client_ui_primitives
  pkg_client_ui_commands --> pkg_client_ui_slots
  pkg_client_ui_commands --> pkg_commands
  pkg_client_ui_commands --> pkg_invariants
  pkg_client_ui_deliverables --> pkg_client_connection
  pkg_client_ui_deliverables --> pkg_client_locale
  pkg_client_ui_deliverables --> pkg_client_runtime
  pkg_client_ui_deliverables --> pkg_client_ui_conversation
  pkg_client_ui_deliverables --> pkg_client_ui_slots
  pkg_client_ui_deliverables --> pkg_invariants
  pkg_client_ui_deliverables --> pkg_system_prompt
  pkg_client_ui_goal --> pkg_api_remotes
  pkg_client_ui_goal --> pkg_client_locale
  pkg_client_ui_goal --> pkg_client_runtime
  pkg_client_ui_goal --> pkg_client_ui_conversation
  pkg_client_ui_goal --> pkg_client_ui_primitives
  pkg_client_ui_goal --> pkg_client_ui_slots
  pkg_client_ui_goal --> pkg_commands
  pkg_client_ui_goal --> pkg_goal
  pkg_client_ui_goal --> pkg_invariants
  pkg_client_ui_jobs --> pkg_client_locale
  pkg_client_ui_jobs --> pkg_client_runtime
  pkg_client_ui_jobs --> pkg_client_ui_conversation
  pkg_client_ui_jobs --> pkg_client_ui_primitives
  pkg_client_ui_jobs --> pkg_client_ui_slots
  pkg_client_ui_jobs --> pkg_invariants
  pkg_client_ui_message_feedback --> pkg_api_remotes
  pkg_client_ui_message_feedback --> pkg_client_connection
  pkg_client_ui_message_feedback --> pkg_client_locale
  pkg_client_ui_message_feedback --> pkg_client_runtime
  pkg_client_ui_message_feedback --> pkg_client_ui_conversation
  pkg_client_ui_message_feedback --> pkg_client_ui_primitives
  pkg_client_ui_message_feedback --> pkg_client_ui_slots
  pkg_client_ui_message_feedback --> pkg_invariants
  pkg_client_ui_message_feedback --> pkg_message_feedback
  pkg_client_ui_message_feedback --> pkg_typert_protocol
  pkg_client_ui_plan --> pkg_api_remotes
  pkg_client_ui_plan --> pkg_client_locale
  pkg_client_ui_plan --> pkg_client_runtime
  pkg_client_ui_plan --> pkg_client_ui_conversation
  pkg_client_ui_plan --> pkg_client_ui_primitives
  pkg_client_ui_plan --> pkg_client_ui_slots
  pkg_client_ui_plan --> pkg_invariants
  pkg_client_ui_plan --> pkg_plan_mode
  pkg_client_ui_subagent --> pkg_client_locale
  pkg_client_ui_subagent --> pkg_client_runtime
  pkg_client_ui_subagent --> pkg_client_ui_conversation
  pkg_client_ui_subagent --> pkg_client_ui_input_trigger
  pkg_client_ui_subagent --> pkg_client_ui_primitives
  pkg_client_ui_subagent --> pkg_client_ui_slots
  pkg_client_ui_subagent --> pkg_invariants
  pkg_client_ui_subagent --> pkg_subagent
  pkg_client_ui_subagent --> pkg_token_meter
  pkg_client_ui_tool --> pkg_api_remotes
  pkg_client_ui_tool --> pkg_client_locale
  pkg_client_ui_tool --> pkg_client_runtime
  pkg_client_ui_tool --> pkg_client_ui_conversation
  pkg_client_ui_tool --> pkg_client_ui_primitives
  pkg_client_ui_tool --> pkg_client_ui_slots
  pkg_client_ui_tool --> pkg_invariants
  pkg_client_ui_workflow_run --> pkg_client_locale
  pkg_client_ui_workflow_run --> pkg_client_runtime
  pkg_client_ui_workflow_run --> pkg_client_ui_conversation
  pkg_client_ui_workflow_run --> pkg_client_ui_primitives
  pkg_client_ui_workflow_run --> pkg_client_ui_slots
  pkg_client_ui_workflow_run --> pkg_invariants
  pkg_client_ui_workflow_run --> pkg_session
  pkg_client_ui_workflow_run --> pkg_tool_workflow
  pkg_client_ui_workflow_run --> pkg_workflow
  pkg_host_directory_picker_auto --> pkg_client_ui_directory_picker_browse
  pkg_host_directory_picker_auto --> pkg_client_ui_directory_picker_native
  pkg_host_directory_picker_auto --> pkg_host_directory_picker_browse
  pkg_host_directory_picker_auto --> pkg_host_directory_picker_native
  pkg_host_directory_picker_auto --> pkg_host_webserver
  pkg_host_directory_picker_auto --> pkg_invariants
  pkg_session_log_export --> pkg_client_locale
  pkg_session_log_export --> pkg_client_runtime
  pkg_session_log_export --> pkg_client_ui_commands
  pkg_session_log_export --> pkg_client_ui_conversation
  pkg_session_log_export --> pkg_client_ui_primitives
  pkg_session_log_export --> pkg_client_ui_slots
  pkg_session_log_export --> pkg_commands
  pkg_session_log_export --> pkg_invariants
  pkg_client_ui_model_selection --> pkg_api_remotes
  pkg_client_ui_model_selection --> pkg_client_connection
  pkg_client_ui_model_selection --> pkg_client_locale
  pkg_client_ui_model_selection --> pkg_client_runtime
  pkg_client_ui_model_selection --> pkg_client_ui_commands
  pkg_client_ui_model_selection --> pkg_client_ui_conversation
  pkg_client_ui_model_selection --> pkg_client_ui_input_trigger
  pkg_client_ui_model_selection --> pkg_client_ui_primitives
  pkg_client_ui_model_selection --> pkg_client_ui_slots
  pkg_client_ui_model_selection --> pkg_invariants
  pkg_client_ui_permission_presets --> pkg_api_remotes
  pkg_client_ui_permission_presets --> pkg_client_connection
  pkg_client_ui_permission_presets --> pkg_client_locale
  pkg_client_ui_permission_presets --> pkg_client_runtime
  pkg_client_ui_permission_presets --> pkg_client_schema_form
  pkg_client_ui_permission_presets --> pkg_client_ui_commands
  pkg_client_ui_permission_presets --> pkg_client_ui_input_trigger
  pkg_client_ui_permission_presets --> pkg_client_ui_primitives
  pkg_client_ui_permission_presets --> pkg_client_ui_settings
  pkg_client_ui_permission_presets --> pkg_client_ui_slots
  pkg_client_ui_permission_presets --> pkg_invariants
  pkg_client_ui_permission_presets --> pkg_permission_presets
  pkg_client_ui_skill --> pkg_api_remotes
  pkg_client_ui_skill --> pkg_client_connection
  pkg_client_ui_skill --> pkg_client_locale
  pkg_client_ui_skill --> pkg_client_runtime
  pkg_client_ui_skill --> pkg_client_ui_input_trigger
  pkg_client_ui_skill --> pkg_client_ui_primitives
  pkg_client_ui_skill --> pkg_client_ui_slots
  pkg_client_ui_skill --> pkg_client_ui_tool
  pkg_client_ui_skill --> pkg_invariants
  pkg_client_ui_cordis --> pkg_api_remotes
  pkg_client_ui_cordis --> pkg_client_connection
  pkg_client_ui_cordis --> pkg_client_locale
  pkg_client_ui_cordis --> pkg_client_runtime
  pkg_client_ui_cordis --> pkg_client_ui_input_trigger
  pkg_client_ui_cordis --> pkg_client_ui_primitives
  pkg_client_ui_cordis --> pkg_client_ui_sidebar
  pkg_client_ui_cordis --> pkg_client_ui_slots
  pkg_client_ui_cordis --> pkg_client_ui_tool
  pkg_client_ui_cordis --> pkg_cordis_client_runner
  pkg_client_ui_cordis --> pkg_invariants
```

| Package | Group | Depends on |
| --- | --- | --- |
| [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants) | `runtime-diagnostics` | — |
| [`atomic-write`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/util/atomic-write) | `util` | [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants) |
| [`brand`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/util/brand) | `util` | [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants) |
| [`home-paths`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/util/home-paths) | `util` | [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants) |
| [`launch-environment`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/util/launch-environment) | `util` | [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants) |
| [`native-command`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/util/native-command) | `util` | [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants) |
| [`output-retention`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/util/output-retention) | `util` | [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants) |
| [`timeout`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/util/timeout) | `util` | [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants) |
| [`scope`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/scope) | `core` | [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants) |
| [`cmdline`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/boot/cmdline) | `boot` | [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants) |
| [`base`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/bundle/base) | `bundle` | [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants) |
| [`client-modules`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/modules) | `client` | [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants) |
| [`client-schema-form`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/schema-form) | `client` | [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants) |
| [`client-ui-attachment`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/ui-attachment) | `client` | [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants) |
| [`client-ui-primitives`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/ui-primitives) | `client` | [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants) |
| [`client-ui-slots`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/ui-slots) | `client` | [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants) |
| [`client-web`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/web) | `client` | [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants) |
| [`client-web-react`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/web-react) | `client` | [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants) |
| [`code-runtime`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/code-runtime/code-runtime) | `code-runtime` | [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants) |
| [`e2b`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/e2b/e2b) | `e2b` | [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants) |
| [`sdk-jsonrpc-demo`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/examples/jsonrpc-demo) | `examples` | [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants) |
| [`host-directory-picker`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/host/directory-picker) | `host` | [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants) |
| [`host-directory-picker-browse`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/host/directory-picker-browse) | `host` | [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants) |
| [`host-directory-picker-native`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/host/directory-picker-native) | `host` | [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants) |
| [`host-webserver`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/host/webserver) | `host` | [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants) |
| [`sandbox-windows-acl`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/sandbox/sandbox-windows-acl) | `sandbox` | [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants) |
| [`storage`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/storage/storage) | `storage` | [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants) |
| [`subprocess`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/subprocess/subprocess) | `subprocess` | [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants) |
| [`llm-mock-server`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/test-support/llm-mock-server) | `test-support` | [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants) |
| [`typert-generator`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/typert/generator) | `typert` | [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants) |
| [`typert-protocol`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/typert/protocol) | `typert` | [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants) |
| [`typert-registry`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/typert/registry) | `typert` | [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants) |
| [`attachment`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/attachment/attachment) | `attachment` | [`brand`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/util/brand), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants) |
| [`client-connection`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/connection) | `client` | [`host-webserver`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/host/webserver), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants) |
| [`client-hmr`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/hmr) | `client` | [`client-modules`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/modules), [`host-webserver`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/host/webserver), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants) |
| [`credentials`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/credentials/credentials) | `credentials` | [`brand`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/util/brand), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants) |
| [`subprocess-e2b`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/e2b/subprocess-e2b) | `e2b` | [`e2b`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/e2b/e2b), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`subprocess`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/subprocess/subprocess), [`timeout`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/util/timeout) |
| [`host-frontend-static`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/host/frontend-static) | `host` | [`host-webserver`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/host/webserver), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants) |
| [`host-plugin-inventory`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/host/plugin-inventory) | `host` | [`brand`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/util/brand), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`typert-protocol`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/typert/protocol) |
| [`anonymous-user-id`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/identity/anonymous-user-id) | `identity` | [`brand`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/util/brand), [`home-paths`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/util/home-paths), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants) |
| [`settings`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/settings/settings) | `settings` | [`brand`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/util/brand), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants) |
| [`storage-domain`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/storage/storage-domain) | `storage` | [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`storage`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/storage/storage) |
| [`storage-json`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/storage/storage-json) | `storage` | [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`storage`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/storage/storage) |
| [`storage-sqlite`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/storage/storage-sqlite) | `storage` | [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`storage`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/storage/storage) |
| [`subprocess-local`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/subprocess/subprocess-local) | `subprocess` | [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`subprocess`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/subprocess/subprocess), [`timeout`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/util/timeout) |
| [`typert-loader`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/typert/loader) | `typert` | [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`typert-registry`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/typert/registry) |
| [`llm`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/llm/llm) | `llm` | [`attachment`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/attachment/attachment), [`brand`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/util/brand), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`timeout`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/util/timeout) |
| [`api-gateway`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/api/gateway) | `api` | [`client-connection`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/connection), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`typert-registry`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/typert/registry) |
| [`attachment-local`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/attachment/attachment-local) | `attachment` | [`attachment`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/attachment/attachment), [`home-paths`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/util/home-paths), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants) |
| [`credentials-local`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/credentials/credentials-local) | `credentials` | [`atomic-write`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/util/atomic-write), [`credentials`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/credentials/credentials), [`home-paths`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/util/home-paths), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`launch-environment`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/util/launch-environment) |
| [`settings-file`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/settings/settings-file) | `settings` | [`atomic-write`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/util/atomic-write), [`home-paths`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/util/home-paths), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`settings`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/settings/settings) |
| [`llm-deepseek`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/llm/llm-deepseek) | `llm` | [`anonymous-user-id`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/identity/anonymous-user-id), [`credentials`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/credentials/credentials), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`launch-environment`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/util/launch-environment), [`llm`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/llm/llm), [`settings`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/settings/settings), [`timeout`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/util/timeout) |
| [`llm-pi-ai`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/llm/llm-pi-ai) | `llm` | [`attachment`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/attachment/attachment), [`credentials`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/credentials/credentials), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`launch-environment`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/util/launch-environment), [`llm`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/llm/llm), [`settings`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/settings/settings), [`timeout`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/util/timeout) |
| [`session`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/session) | `core` | [`brand`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/util/brand), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`llm`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/llm/llm), [`scope`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/scope), [`typert-protocol`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/typert/protocol) |
| [`system-prompt`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/system-prompt) | `core` | [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`llm`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/llm/llm), [`scope`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/scope) |
| [`skill`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/skill/skill) | `skill` | [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`llm`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/llm/llm), [`scope`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/scope) |
| [`web`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/web/web) | `web` | [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`llm`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/llm/llm) |
| [`lsp`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/lsp/lsp) | `lsp` | [`brand`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/util/brand), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`llm`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/llm/llm) |
| [`agent`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/agent) | `core` | [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`llm`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/llm/llm), [`scope`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/scope), [`session`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/session), [`system-prompt`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/system-prompt), [`typert-protocol`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/typert/protocol) |
| [`skill-badge`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/skill/skill-badge) | `skill` | [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`skill`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/skill/skill) |
| [`web-fetch-http`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/web/web-fetch-http) | `web` | [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`timeout`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/util/timeout), [`web`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/web/web) |
| [`web-search-exa`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/web/web-search-exa) | `web` | [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`launch-environment`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/util/launch-environment), [`web`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/web/web) |
| [`web-search-perplexity`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/web/web-search-perplexity) | `web` | [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`launch-environment`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/util/launch-environment), [`web`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/web/web) |
| [`spill`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/spill/spill) | `spill` | [`brand`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/util/brand), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`llm`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/llm/llm), [`session`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/session) |
| [`app-boot`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/boot/app-boot) | `boot` | [`home-paths`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/util/home-paths), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`launch-environment`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/util/launch-environment), [`system-prompt`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/system-prompt) |
| [`code-runtime-worker-thread`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/code-runtime/code-runtime-worker-thread) | `code-runtime` | [`code-runtime`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/code-runtime/code-runtime), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`session`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/session), [`timeout`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/util/timeout) |
| [`persona`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/preset/persona) | `preset` | [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`system-prompt`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/system-prompt) |
| [`sandbox`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/sandbox/sandbox) | `sandbox` | [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`llm`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/llm/llm), [`session`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/session) |
| [`session-persistence`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/session/session-persistence) | `session` | [`brand`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/util/brand), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`session`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/session), [`timeout`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/util/timeout) |
| [`session-projection`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/session/session-projection) | `session` | [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`session`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/session) |
| [`acp-snapshot`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/test-support/acp-snapshot) | `test-support` | [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`session`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/session) |
| [`llm-retry`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/llm/llm-retry) | `llm` | [`agent`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/agent), [`brand`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/util/brand), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`llm`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/llm/llm), [`session`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/session), [`timeout`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/util/timeout) |
| [`agent-default-model`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/agent-default-model) | `core` | [`agent`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/agent), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`llm`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/llm/llm), [`settings`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/settings/settings) |
| [`goal`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/goal/goal) | `goal` | [`agent`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/agent), [`brand`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/util/brand), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`llm`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/llm/llm), [`scope`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/scope), [`session`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/session), [`session-projection`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/session/session-projection), [`typert-protocol`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/typert/protocol) |
| [`fs`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/fs/fs) | `fs` | [`brand`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/util/brand), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`llm`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/llm/llm), [`sandbox`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/sandbox/sandbox) |
| [`web-search-deepseek`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/web/web-search-deepseek) | `web` | [`agent`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/agent), [`credentials`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/credentials/credentials), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`launch-environment`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/util/launch-environment), [`session`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/session), [`settings`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/settings/settings), [`web`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/web/web) |
| [`spill-local`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/spill/spill-local) | `spill` | [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`spill`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/spill/spill) |
| [`time-context`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/context/time-context) | `context` | [`agent`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/agent), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`session`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/session) |
| [`message-feedback`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/feedback/message-feedback) | `feedback` | [`brand`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/util/brand), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`llm`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/llm/llm), [`session`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/session), [`session-persistence`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/session/session-persistence), [`storage-domain`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/storage/storage-domain), [`typert-protocol`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/typert/protocol) |
| [`commands`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/interaction/commands) | `interaction` | [`agent`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/agent), [`brand`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/util/brand), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`scope`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/scope), [`session`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/session), [`typert-protocol`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/typert/protocol) |
| [`user-approval`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/interaction/user-approval) | `interaction` | [`agent`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/agent), [`brand`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/util/brand), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`llm`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/llm/llm), [`scope`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/scope), [`session`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/session), [`system-prompt`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/system-prompt) |
| [`user-questions`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/interaction/user-questions) | `interaction` | [`agent`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/agent), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`llm`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/llm/llm) |
| [`jobs`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/jobs/jobs) | `jobs` | [`agent`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/agent), [`brand`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/util/brand), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`session`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/session) |
| [`agent-presets`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/preset/agent-presets) | `preset` | [`agent`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/agent), [`atomic-write`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/util/atomic-write), [`home-paths`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/util/home-paths), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`scope`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/scope), [`session`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/session), [`settings`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/settings/settings), [`system-prompt`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/system-prompt) |
| [`sandbox-local`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/sandbox/sandbox-local) | `sandbox` | [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`llm`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/llm/llm), [`sandbox`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/sandbox/sandbox), [`session`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/session) |
| [`sandbox-policy`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/sandbox/sandbox-policy) | `sandbox` | [`agent`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/agent), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`sandbox`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/sandbox/sandbox), [`session`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/session), [`system-prompt`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/system-prompt) |
| [`session-persistence-jsonl`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/session/session-persistence-jsonl) | `session` | [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`session`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/session), [`session-persistence`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/session/session-persistence) |
| [`session-persistence-sqlite`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/session/session-persistence-sqlite) | `session` | [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`session`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/session), [`session-persistence`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/session/session-persistence) |
| [`session-projection-cache`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/session/session-projection-cache) | `session` | [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`session`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/session), [`session-persistence`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/session/session-persistence), [`session-projection`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/session/session-projection), [`storage-domain`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/storage/storage-domain) |
| [`session-stats`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/session/session-stats) | `session` | [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`llm`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/llm/llm), [`session`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/session), [`session-projection`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/session/session-projection) |
| [`session-telemetry`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/session/session-telemetry) | `session` | [`agent`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/agent), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`session`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/session) |
| [`session-title`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/session/session-title) | `session` | [`brand`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/util/brand), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`llm`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/llm/llm), [`session`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/session), [`session-projection`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/session/session-projection) |
| [`shell`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/shell/shell) | `shell` | [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`sandbox`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/sandbox/sandbox), [`settings`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/settings/settings), [`subprocess`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/subprocess/subprocess) |
| [`terminal`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/terminal/terminal) | `terminal` | [`agent`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/agent), [`brand`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/util/brand), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants) |
| [`loader-smoke`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/test-support/loader-smoke) | `test-support` | [`agent`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/agent), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`llm`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/llm/llm), [`session`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/session) |
| [`workflow`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/workflow/workflow) | `workflow` | [`agent`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/agent), [`brand`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/util/brand), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`llm`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/llm/llm), [`session`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/session) |
| [`workspace`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/workspace/workspace) | `workspace` | [`brand`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/util/brand), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`session`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/session), [`session-persistence`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/session/session-persistence), [`storage`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/storage/storage), [`storage-domain`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/storage/storage-domain) |
| [`tools`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/tools) | `core` | [`agent`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/agent), [`code-runtime`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/code-runtime/code-runtime), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`llm`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/llm/llm), [`scope`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/scope), [`session`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/session), [`system-prompt`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/system-prompt), [`user-approval`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/interaction/user-approval) |
| [`command-goal`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/goal/command-goal) | `goal` | [`commands`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/interaction/commands), [`goal`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/goal/goal), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants) |
| [`goal-round-driver`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/goal/goal-round-driver) | `goal` | [`agent`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/agent), [`goal`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/goal/goal), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`llm`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/llm/llm), [`session`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/session) |
| [`fs-local`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/fs/fs-local) | `fs` | [`fs`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/fs/fs), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants) |
| [`fs-observation-policy`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/fs/fs-observation-policy) | `fs` | [`fs`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/fs/fs), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants) |
| [`skill-filesystem`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/skill/skill-filesystem) | `skill` | [`fs`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/fs/fs), [`home-paths`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/util/home-paths), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`skill`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/skill/skill) |
| [`hook-protocol`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/hooks/hook-protocol) | `hooks` | [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`session`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/session), [`shell`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/shell/shell) |
| [`session-query`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/session-query/session-query) | `session-query` | [`brand`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/util/brand), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`llm`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/llm/llm), [`session`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/session), [`session-persistence`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/session/session-persistence), [`session-title`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/session/session-title) |
| [`acp`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/acp/acp) | `acp` | [`agent`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/agent), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`session`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/session), [`user-approval`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/interaction/user-approval) |
| [`headless`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/bundle/headless) | `bundle` | [`agent`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/agent), [`agent-default-model`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/agent-default-model), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`llm`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/llm/llm), [`session`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/session) |
| [`compaction`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/compaction/compaction) | `compaction` | [`brand`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/util/brand), [`commands`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/interaction/commands), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`llm`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/llm/llm), [`session`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/session) |
| [`tmux-context`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/context/tmux-context) | `context` | [`agent`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/agent), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`session`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/session), [`shell`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/shell/shell) |
| [`fs-e2b`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/e2b/fs-e2b) | `e2b` | [`e2b`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/e2b/e2b), [`fs`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/fs/fs), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants) |
| [`command-feedback`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/feedback/command-feedback) | `feedback` | [`anonymous-user-id`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/identity/anonymous-user-id), [`commands`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/interaction/commands), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`session`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/session), [`session-telemetry`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/session/session-telemetry) |
| [`permission-presets`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/interaction/permission-presets) | `interaction` | [`commands`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/interaction/commands), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`sandbox`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/sandbox/sandbox), [`sandbox-policy`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/sandbox/sandbox-policy), [`session`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/session), [`session-projection`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/session/session-projection), [`settings`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/settings/settings), [`shell`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/shell/shell), [`user-approval`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/interaction/user-approval) |
| [`jobs-local`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/jobs/jobs-local) | `jobs` | [`agent`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/agent), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`jobs`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/jobs/jobs), [`scope`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/scope), [`timeout`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/util/timeout) |
| [`lsp-stdio`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/lsp/lsp-stdio) | `lsp` | [`brand`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/util/brand), [`fs`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/fs/fs), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`llm`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/llm/llm), [`lsp`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/lsp/lsp), [`subprocess`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/subprocess/subprocess), [`timeout`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/util/timeout) |
| [`session-title-llm`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/session/session-title-llm) | `session` | [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`llm`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/llm/llm), [`session`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/session), [`session-title`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/session/session-title), [`timeout`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/util/timeout) |
| [`bash-local`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/shell/bash-local) | `shell` | [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`settings`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/settings/settings), [`shell`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/shell/shell), [`subprocess`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/subprocess/subprocess), [`timeout`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/util/timeout) |
| [`pwsh-local`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/shell/pwsh-local) | `shell` | [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`settings`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/settings/settings), [`shell`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/shell/shell), [`subprocess`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/subprocess/subprocess), [`timeout`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/util/timeout) |
| [`terminal-bash`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/terminal/terminal-bash) | `terminal` | [`agent`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/agent), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`sandbox`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/sandbox/sandbox), [`sandbox-policy`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/sandbox/sandbox-policy), [`session`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/session), [`subprocess`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/subprocess/subprocess), [`terminal`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/terminal/terminal) |
| [`token-meter`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/llm/token-meter) | `llm` | [`compaction`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/compaction/compaction), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`llm`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/llm/llm), [`session`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/session), [`session-projection`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/session/session-projection) |
| [`agent-loop`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/agent-loop) | `core` | [`agent`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/agent), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`llm`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/llm/llm), [`scope`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/scope), [`session`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/session), [`session-persistence`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/session/session-persistence), [`settings`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/settings/settings), [`system-prompt`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/system-prompt), [`tools`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/tools) |
| [`agent-tool-presentation`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/agent-tool-presentation) | `core` | [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`tools`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/tools) |
| [`tool-goal`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/goal/tool-goal) | `goal` | [`agent`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/agent), [`goal`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/goal/goal), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`llm`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/llm/llm), [`session`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/session), [`system-prompt`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/system-prompt), [`tools`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/tools) |
| [`fs-sandbox`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/fs/fs-sandbox) | `fs` | [`fs`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/fs/fs), [`fs-local`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/fs/fs-local), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`sandbox`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/sandbox/sandbox), [`sandbox-policy`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/sandbox/sandbox-policy) |
| [`tool-fs`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/fs/tool-fs) | `fs` | [`attachment`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/attachment/attachment), [`fs`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/fs/fs), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`llm`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/llm/llm), [`sandbox`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/sandbox/sandbox), [`sandbox-policy`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/sandbox/sandbox-policy), [`session`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/session), [`system-prompt`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/system-prompt), [`tools`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/tools), [`user-approval`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/interaction/user-approval) |
| [`tool-fs-search`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/fs/tool-fs-search) | `fs` | [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`llm`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/llm/llm), [`output-retention`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/util/output-retention), [`session`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/session), [`spill`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/spill/spill), [`subprocess`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/subprocess/subprocess), [`system-prompt`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/system-prompt), [`timeout`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/util/timeout), [`tools`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/tools) |
| [`tool-str-replace-editor`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/fs/tool-str-replace-editor) | `fs` | [`fs`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/fs/fs), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`sandbox`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/sandbox/sandbox), [`sandbox-policy`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/sandbox/sandbox-policy), [`tools`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/tools) |
| [`tool-skill`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/skill/tool-skill) | `skill` | [`agent`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/agent), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`llm`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/llm/llm), [`skill`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/skill/skill), [`tools`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/tools) |
| [`subagent`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/subagent/subagent) | `subagent` | [`agent`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/agent), [`agent-presets`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/preset/agent-presets), [`brand`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/util/brand), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`jobs`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/jobs/jobs), [`llm`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/llm/llm), [`sandbox`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/sandbox/sandbox), [`sandbox-policy`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/sandbox/sandbox-policy), [`scope`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/scope), [`session`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/session), [`session-persistence`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/session/session-persistence), [`session-projection`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/session/session-projection), [`session-projection-cache`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/session/session-projection-cache), [`tools`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/tools), [`user-approval`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/interaction/user-approval) |
| [`tool-web`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/web/tool-web) | `web` | [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`llm`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/llm/llm), [`system-prompt`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/system-prompt), [`tools`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/tools), [`web`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/web/web) |
| [`spill-policy`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/spill/spill-policy) | `spill` | [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`llm`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/llm/llm), [`output-retention`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/util/output-retention), [`session`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/session), [`spill`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/spill/spill), [`tools`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/tools) |
| [`tool-todo`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/todo/tool-todo) | `todo` | [`agent`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/agent), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`session`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/session), [`session-projection`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/session/session-projection), [`tools`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/tools) |
| [`plan-mode`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/plan/plan-mode) | `plan` | [`agent`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/agent), [`commands`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/interaction/commands), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`llm`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/llm/llm), [`session`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/session), [`session-projection`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/session/session-projection), [`system-prompt`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/system-prompt), [`tools`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/tools), [`user-questions`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/interaction/user-questions) |
| [`hooks-codex`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/hooks/hooks-codex) | `hooks` | [`agent`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/agent), [`hook-protocol`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/hooks/hook-protocol), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`llm`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/llm/llm), [`session`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/session), [`session-persistence`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/session/session-persistence), [`tools`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/tools) |
| [`session-query-sqlite`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/session-query/session-query-sqlite) | `session-query` | [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`session`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/session), [`session-persistence`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/session/session-persistence), [`session-query`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/session-query/session-query) |
| [`tool-session-query`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/session-query/tool-session-query) | `session-query` | [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`llm`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/llm/llm), [`session`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/session), [`session-query`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/session-query/session-query), [`system-prompt`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/system-prompt), [`timeout`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/util/timeout), [`tools`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/tools) |
| [`command-compact`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/compaction/command-compact) | `compaction` | [`commands`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/interaction/commands), [`compaction`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/compaction/compaction), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants) |
| [`agent-instructions`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/context/agent-instructions) | `context` | [`agent`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/agent), [`fs`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/fs/fs), [`home-paths`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/util/home-paths), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`llm`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/llm/llm), [`session`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/session), [`tools`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/tools) |
| [`session-reference`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/context/session-reference) | `context` | [`agent`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/agent), [`compaction`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/compaction/compaction), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`llm`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/llm/llm), [`output-retention`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/util/output-retention), [`session`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/session), [`session-query`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/session-query/session-query) |
| [`cordis-host-runner`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/extensions/cordis-host-runner) | `extensions` | [`agent`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/agent), [`brand`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/util/brand), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`llm`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/llm/llm), [`scope`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/scope), [`session`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/session), [`tools`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/tools), [`typert-protocol`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/typert/protocol) |
| [`repeat-tool-reminder`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/guard/repeat-tool-reminder) | `guard` | [`agent`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/agent), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`tools`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/tools) |
| [`tool-call-timeout-policy`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/guard/timeout-policy) | `guard` | [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`llm`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/llm/llm), [`timeout`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/util/timeout), [`tools`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/tools) |
| [`tool-ask-user`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/interaction/tool-ask-user) | `interaction` | [`agent`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/agent), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`tools`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/tools), [`user-questions`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/interaction/user-questions) |
| [`tool-jobs`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/jobs/tool-jobs) | `jobs` | [`agent`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/agent), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`jobs`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/jobs/jobs), [`llm`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/llm/llm), [`output-retention`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/util/output-retention), [`system-prompt`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/system-prompt), [`tools`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/tools) |
| [`tool-lsp`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/lsp/tool-lsp) | `lsp` | [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`llm`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/llm/llm), [`lsp`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/lsp/lsp), [`system-prompt`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/system-prompt), [`timeout`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/util/timeout), [`tools`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/tools) |
| [`mcp-client`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/mcp/mcp-client) | `mcp` | [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`llm`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/llm/llm), [`subprocess`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/subprocess/subprocess), [`timeout`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/util/timeout), [`tools`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/tools) |
| [`schedule`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/schedule/schedule) | `schedule` | [`agent`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/agent), [`brand`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/util/brand), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`llm`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/llm/llm), [`session`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/session), [`session-persistence`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/session/session-persistence), [`tools`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/tools) |
| [`session-checkpoint-policy`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/session/session-checkpoint-policy) | `session` | [`agent`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/agent), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`llm`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/llm/llm), [`session`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/session), [`session-persistence`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/session/session-persistence), [`tools`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/tools) |
| [`session-telemetry-otel`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/session/session-telemetry-otel) | `session` | [`anonymous-user-id`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/identity/anonymous-user-id), [`command-feedback`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/feedback/command-feedback), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`llm`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/llm/llm), [`session`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/session), [`session-telemetry`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/session/session-telemetry) |
| [`session-title-all-prompts-llm`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/session/session-title-all-prompts-llm) | `session` | [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`llm`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/llm/llm), [`session`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/session), [`session-title`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/session/session-title), [`session-title-llm`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/session/session-title-llm) |
| [`session-title-first-prompt-llm`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/session/session-title-first-prompt-llm) | `session` | [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`llm`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/llm/llm), [`session`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/session), [`session-title`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/session/session-title), [`session-title-llm`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/session/session-title-llm) |
| [`bash-sandbox`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/shell/bash-sandbox) | `shell` | [`bash-local`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/shell/bash-local), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`sandbox`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/sandbox/sandbox), [`sandbox-policy`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/sandbox/sandbox-policy), [`shell`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/shell/shell) |
| [`pwsh-sandbox`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/shell/pwsh-sandbox) | `shell` | [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`pwsh-local`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/shell/pwsh-local), [`sandbox`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/sandbox/sandbox), [`sandbox-policy`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/sandbox/sandbox-policy), [`shell`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/shell/shell) |
| [`shell-env`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/shell/shell-env) | `shell` | [`home-paths`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/util/home-paths), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`session-persistence`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/session/session-persistence), [`shell`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/shell/shell), [`tools`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/tools) |
| [`tool-bash-persistent`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/shell/tool-bash-persistent) | `shell` | [`agent`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/agent), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`terminal`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/terminal/terminal), [`timeout`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/util/timeout), [`tools`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/tools) |
| [`tool-terminal`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/terminal/tool-terminal) | `terminal` | [`agent`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/agent), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`jobs`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/jobs/jobs), [`llm`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/llm/llm), [`output-retention`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/util/output-retention), [`system-prompt`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/system-prompt), [`terminal`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/terminal/terminal), [`tools`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/tools) |
| [`agent-loop-testkit`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/test-support/agent-loop-testkit) | `test-support` | [`agent`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/agent), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`llm`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/llm/llm), [`session`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/session), [`system-prompt`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/system-prompt), [`tools`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/tools) |
| [`llm-replay`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/test-support/llm-replay) | `test-support` | [`compaction`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/compaction/compaction), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`llm`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/llm/llm), [`session`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/session) |
| [`tool-workflow`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/workflow/tool-workflow) | `workflow` | [`agent`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/agent), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`llm`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/llm/llm), [`session`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/session), [`system-prompt`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/system-prompt), [`tools`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/tools), [`workflow`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/workflow/workflow) |
| [`subagent-acp`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/subagent/subagent-acp) | `subagent` | [`agent`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/agent), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`llm`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/llm/llm), [`session`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/session), [`subagent`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/subagent/subagent), [`subprocess`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/subprocess/subprocess), [`timeout`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/util/timeout) |
| [`subagent-claude-code`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/subagent/subagent-claude-code) | `subagent` | [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`llm`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/llm/llm), [`session`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/session), [`subagent`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/subagent/subagent), [`subprocess`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/subprocess/subprocess), [`timeout`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/util/timeout) |
| [`subagent-in-process-driver`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/subagent/subagent-in-process-driver) | `subagent` | [`agent`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/agent), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`llm`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/llm/llm), [`session`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/session), [`subagent`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/subagent/subagent), [`system-prompt`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/system-prompt), [`tools`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/tools) |
| [`tool-subagent`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/subagent/tool-subagent) | `subagent` | [`agent`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/agent), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`jobs`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/jobs/jobs), [`llm`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/llm/llm), [`subagent`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/subagent/subagent), [`system-prompt`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/system-prompt), [`tools`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/tools) |
| [`tool-subagent-control`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/subagent/tool-subagent-control) | `subagent` | [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`llm`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/llm/llm), [`session`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/session), [`subagent`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/subagent/subagent), [`tools`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/tools) |
| [`tool-subagent-report`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/subagent/tool-subagent-report) | `subagent` | [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`llm`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/llm/llm), [`subagent`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/subagent/subagent), [`system-prompt`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/system-prompt), [`tools`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/tools) |
| [`hooks-claude-code`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/hooks/hooks-claude-code) | `hooks` | [`agent`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/agent), [`hook-protocol`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/hooks/hook-protocol), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`llm`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/llm/llm), [`session`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/session), [`session-persistence`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/session/session-persistence), [`subagent`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/subagent/subagent), [`tools`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/tools) |
| [`api-remotes`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/api/remotes) | `api` | [`agent`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/agent), [`agent-presets`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/preset/agent-presets), [`api-gateway`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/api/gateway), [`commands`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/interaction/commands), [`cordis-host-runner`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/extensions/cordis-host-runner), [`credentials`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/credentials/credentials), [`goal`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/goal/goal), [`host-plugin-inventory`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/host/plugin-inventory), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`llm`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/llm/llm), [`message-feedback`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/feedback/message-feedback), [`session`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/session), [`session-persistence`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/session/session-persistence), [`settings`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/settings/settings), [`typert-registry`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/typert/registry) |
| [`web-app`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/bundle/web-app) | `bundle` | [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`shell-env`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/shell/shell-env), [`system-prompt`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/system-prompt) |
| [`compaction-tool-result-pruner`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/compaction/compaction-tool-result-pruner) | `compaction` | [`compaction`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/compaction/compaction), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`llm`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/llm/llm), [`session`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/session), [`token-meter`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/llm/token-meter) |
| [`tool-cordis`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/extensions/tool-cordis) | `extensions` | [`agent`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/agent), [`cordis-host-runner`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/extensions/cordis-host-runner), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`llm`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/llm/llm), [`scope`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/scope), [`session`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/session), [`system-prompt`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/system-prompt), [`tools`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/tools) |
| [`host-apiproxy`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/host/apiproxy) | `host` | [`agent-presets`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/preset/agent-presets), [`cordis-host-runner`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/extensions/cordis-host-runner), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants) |
| [`sdk-protocol`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/sdk/protocol) | `sdk` | [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`llm`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/llm/llm), [`session`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/session), [`subagent`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/subagent/subagent) |
| [`tool-bash`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/shell/tool-bash) | `shell` | [`agent`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/agent), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`jobs`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/jobs/jobs), [`llm`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/llm/llm), [`sandbox`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/sandbox/sandbox), [`sandbox-policy`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/sandbox/sandbox-policy), [`shell`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/shell/shell), [`shell-env`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/shell/shell-env), [`system-prompt`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/system-prompt), [`tools`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/tools), [`user-approval`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/interaction/user-approval) |
| [`tool-pwsh`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/shell/tool-pwsh) | `shell` | [`agent`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/agent), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`jobs`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/jobs/jobs), [`llm`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/llm/llm), [`sandbox`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/sandbox/sandbox), [`sandbox-policy`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/sandbox/sandbox-policy), [`shell`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/shell/shell), [`shell-env`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/shell/shell-env), [`system-prompt`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/system-prompt), [`tools`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/tools), [`user-approval`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/interaction/user-approval) |
| [`tool-ralph`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/workflow/tool-ralph) | `workflow` | [`agent`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/agent), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`llm`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/llm/llm), [`subagent`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/subagent/subagent), [`system-prompt`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/system-prompt), [`tools`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/tools), [`workflow`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/workflow/workflow) |
| [`workflow-worker-thread`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/workflow/workflow-worker-thread) | `workflow` | [`agent`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/agent), [`brand`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/util/brand), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`llm`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/llm/llm), [`session`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/session), [`subagent`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/subagent/subagent), [`tools`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/tools), [`workflow`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/workflow/workflow) |
| [`subagent-codex`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/subagent/subagent-codex) | `subagent` | [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`llm`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/llm/llm), [`sdk-protocol`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/sdk/protocol), [`session`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/session), [`subagent`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/subagent/subagent), [`subprocess`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/subprocess/subprocess), [`timeout`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/util/timeout) |
| [`subagent-fork-in-process`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/subagent/subagent-fork-in-process) | `subagent` | [`agent`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/agent), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`session`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/session), [`subagent`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/subagent/subagent), [`subagent-in-process-driver`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/subagent/subagent-in-process-driver) |
| [`subagent-spawn-in-process`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/subagent/subagent-spawn-in-process) | `subagent` | [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`subagent`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/subagent/subagent), [`subagent-in-process-driver`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/subagent/subagent-in-process-driver) |
| [`client-runtime`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/runtime) | `client` | [`api-remotes`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/api/remotes), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`typert-protocol`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/typert/protocol), [`typert-registry`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/typert/registry) |
| [`compaction-basic`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/compaction/compaction-basic) | `compaction` | [`agent`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/agent), [`commands`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/interaction/commands), [`compaction`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/compaction/compaction), [`compaction-tool-result-pruner`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/compaction/compaction-tool-result-pruner), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`llm`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/llm/llm), [`session`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/session), [`token-meter`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/llm/token-meter) |
| [`agent-spine-demo`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/examples/agent-spine-demo) | `examples` | [`agent`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/agent), [`agent-instructions`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/context/agent-instructions), [`agent-loop`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/agent-loop), [`goal`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/goal/goal), [`goal-round-driver`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/goal/goal-round-driver), [`home-paths`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/util/home-paths), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`jobs-local`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/jobs/jobs-local), [`llm`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/llm/llm), [`llm-retry`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/llm/llm-retry), [`scope`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/scope), [`session`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/session), [`session-title`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/session/session-title), [`shell-env`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/shell/shell-env), [`skill`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/skill/skill), [`skill-filesystem`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/skill/skill-filesystem), [`system-prompt`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/system-prompt), [`tool-bash`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/shell/tool-bash), [`tool-goal`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/goal/tool-goal), [`tool-jobs`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/jobs/tool-jobs), [`tool-skill`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/skill/tool-skill), [`tools`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/tools) |
| [`sdk-client`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/sdk/client) | `sdk` | [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`llm`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/llm/llm), [`sdk-protocol`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/sdk/protocol), [`session`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/session) |
| [`sdk-jsonrpc-server`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/sdk/server) | `sdk` | [`agent`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/agent), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`llm`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/llm/llm), [`llm-deepseek`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/llm/llm-deepseek), [`scope`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/scope), [`sdk-protocol`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/sdk/protocol), [`session`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/session), [`subagent`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/subagent/subagent) |
| [`subagent-dsh-sdk`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/subagent/subagent-dsh-sdk) | `subagent` | [`agent`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/agent), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`llm`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/llm/llm), [`sdk-client`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/sdk/client), [`session`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/session), [`subagent`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/subagent/subagent), [`subprocess`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/subprocess/subprocess) |
| [`client-ui-settings`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/ui-settings) | `client` | [`api-remotes`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/api/remotes), [`client-connection`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/connection), [`client-runtime`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/runtime), [`client-schema-form`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/schema-form), [`client-ui-slots`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/ui-slots), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`settings`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/settings/settings) |
| [`client-ui-settings-models`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/ui-settings-models) | `client` | [`api-remotes`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/api/remotes), [`client-connection`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/connection), [`client-runtime`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/runtime), [`client-schema-form`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/schema-form), [`client-ui-primitives`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/ui-primitives), [`client-ui-slots`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/ui-slots), [`client-web-react`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/web-react), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants) |
| [`acp-demo`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/examples/acp-demo) | `examples` | [`acp`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/acp/acp), [`agent-instructions`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/context/agent-instructions), [`agent-spine-demo`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/examples/agent-spine-demo), [`app-boot`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/boot/app-boot), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`session-checkpoint-policy`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/session/session-checkpoint-policy), [`session-persistence-jsonl`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/session/session-persistence-jsonl), [`session-query`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/session-query/session-query), [`session-query-sqlite`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/session-query/session-query-sqlite), [`tools`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/tools) |
| [`client-test-runtime`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/test-support/client-runtime) | `test-support` | [`client-runtime`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/runtime), [`client-ui-slots`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/ui-slots), [`client-web-react`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/web-react), [`host-apiproxy`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/host/apiproxy), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants) |
| [`client-locale`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/locale) | `client` | [`api-remotes`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/api/remotes), [`client-connection`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/connection), [`client-runtime`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/runtime), [`client-ui-primitives`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/ui-primitives), [`client-ui-settings`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/ui-settings), [`client-ui-slots`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/ui-slots), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants) |
| [`client-ui-input-trigger`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/ui-input-trigger) | `client` | [`client-locale`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/locale), [`client-runtime`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/runtime), [`client-ui-primitives`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/ui-primitives), [`client-ui-slots`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/ui-slots), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants) |
| [`client-ui-settings-plugin-inventory`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/ui-settings-plugin-inventory) | `client` | [`api-remotes`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/api/remotes), [`client-locale`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/locale), [`client-runtime`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/runtime), [`client-ui-primitives`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/ui-primitives), [`client-ui-settings`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/ui-settings), [`client-ui-slots`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/ui-slots), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants) |
| [`client-ui-settings-plugins`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/ui-settings-plugins) | `client` | [`api-remotes`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/api/remotes), [`client-connection`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/connection), [`client-locale`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/locale), [`client-runtime`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/runtime), [`client-ui-primitives`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/ui-primitives), [`client-ui-settings`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/ui-settings), [`client-ui-slots`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/ui-slots), [`client-web-react`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/web-react), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants) |
| [`client-ui-sidebar`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/ui-sidebar) | `client` | [`client-locale`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/locale), [`client-runtime`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/runtime), [`client-ui-primitives`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/ui-primitives), [`client-ui-slots`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/ui-slots), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants) |
| [`client-ui-theme`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/ui-theme) | `client` | [`api-remotes`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/api/remotes), [`client-connection`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/connection), [`client-locale`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/locale), [`client-runtime`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/runtime), [`client-ui-primitives`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/ui-primitives), [`client-ui-settings`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/ui-settings), [`client-ui-slots`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/ui-slots), [`host-webserver`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/host/webserver), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants) |
| [`client-ui-trajectory`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/ui-trajectory) | `client` | [`agent`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/agent), [`client-locale`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/locale), [`client-runtime`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/runtime), [`client-ui-primitives`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/ui-primitives), [`compaction`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/compaction/compaction), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`tools`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/tools) |
| [`client-ui-user-questions`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/ui-user-questions) | `client` | [`api-remotes`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/api/remotes), [`client-locale`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/locale), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants) |
| [`client-ui-workspace`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/ui-workspace) | `client` | [`client-locale`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/locale), [`client-runtime`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/runtime), [`client-ui-primitives`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/ui-primitives), [`client-ui-slots`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/ui-slots), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants) |
| [`client-ui-conversation`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/ui-conversation) | `client` | [`agent`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/agent), [`api-remotes`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/api/remotes), [`attachment`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/attachment/attachment), [`brand`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/util/brand), [`client-connection`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/connection), [`client-locale`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/locale), [`client-runtime`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/runtime), [`client-ui-attachment`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/ui-attachment), [`client-ui-input-trigger`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/ui-input-trigger), [`client-ui-primitives`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/ui-primitives), [`client-ui-settings`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/ui-settings), [`client-ui-slots`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/ui-slots), [`commands`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/interaction/commands), [`compaction`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/compaction/compaction), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`llm-retry`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/llm/llm-retry), [`session-stats`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/session/session-stats), [`token-meter`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/llm/token-meter), [`tools`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/tools) |
| [`client-ui-directory-picker-browse`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/ui-directory-picker-browse) | `client` | [`client-locale`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/locale), [`client-runtime`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/runtime), [`client-ui-primitives`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/ui-primitives), [`client-ui-slots`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/ui-slots), [`client-ui-workspace`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/ui-workspace), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants) |
| [`client-ui-directory-picker-native`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/ui-directory-picker-native) | `client` | [`client-runtime`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/runtime), [`client-ui-slots`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/ui-slots), [`client-ui-workspace`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/ui-workspace), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants) |
| [`client-ui-layout`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/ui-layout) | `client` | [`client-runtime`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/runtime), [`client-ui-slots`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/ui-slots), [`client-ui-theme`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/ui-theme), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants) |
| [`client-ui-settings-general`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/ui-settings-general) | `client` | [`api-remotes`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/api/remotes), [`client-connection`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/connection), [`client-locale`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/locale), [`client-runtime`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/runtime), [`client-ui-primitives`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/ui-primitives), [`client-ui-settings`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/ui-settings), [`client-ui-sidebar`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/ui-sidebar), [`client-ui-slots`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/ui-slots), [`client-web-react`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/web-react), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants) |
| [`cordis-client-runner`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/extensions/cordis-client-runner) | `extensions` | [`api-remotes`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/api/remotes), [`client-connection`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/connection), [`client-modules`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/modules), [`client-runtime`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/runtime), [`client-ui-slots`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/ui-slots), [`client-ui-theme`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/ui-theme), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants) |
| [`client-ui-agent-preset`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/ui-agent-preset) | `client` | [`api-remotes`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/api/remotes), [`client-connection`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/connection), [`client-locale`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/locale), [`client-runtime`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/runtime), [`client-ui-conversation`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/ui-conversation), [`client-ui-primitives`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/ui-primitives), [`client-ui-settings`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/ui-settings), [`client-ui-slots`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/ui-slots), [`client-web-react`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/web-react), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants) |
| [`client-ui-commands`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/ui-commands) | `client` | [`api-remotes`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/api/remotes), [`client-locale`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/locale), [`client-runtime`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/runtime), [`client-ui-conversation`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/ui-conversation), [`client-ui-input-trigger`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/ui-input-trigger), [`client-ui-primitives`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/ui-primitives), [`client-ui-slots`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/ui-slots), [`commands`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/interaction/commands), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants) |
| [`client-ui-deliverables`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/ui-deliverables) | `client` | [`client-connection`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/connection), [`client-locale`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/locale), [`client-runtime`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/runtime), [`client-ui-conversation`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/ui-conversation), [`client-ui-slots`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/ui-slots), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`system-prompt`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/system-prompt) |
| [`client-ui-goal`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/ui-goal) | `client` | [`api-remotes`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/api/remotes), [`client-locale`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/locale), [`client-runtime`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/runtime), [`client-ui-conversation`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/ui-conversation), [`client-ui-primitives`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/ui-primitives), [`client-ui-slots`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/ui-slots), [`commands`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/interaction/commands), [`goal`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/goal/goal), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants) |
| [`client-ui-jobs`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/ui-jobs) | `client` | [`client-locale`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/locale), [`client-runtime`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/runtime), [`client-ui-conversation`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/ui-conversation), [`client-ui-primitives`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/ui-primitives), [`client-ui-slots`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/ui-slots), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants) |
| [`client-ui-message-feedback`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/ui-message-feedback) | `client` | [`api-remotes`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/api/remotes), [`client-connection`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/connection), [`client-locale`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/locale), [`client-runtime`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/runtime), [`client-ui-conversation`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/ui-conversation), [`client-ui-primitives`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/ui-primitives), [`client-ui-slots`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/ui-slots), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`message-feedback`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/feedback/message-feedback), [`typert-protocol`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/typert/protocol) |
| [`client-ui-plan`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/ui-plan) | `client` | [`api-remotes`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/api/remotes), [`client-locale`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/locale), [`client-runtime`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/runtime), [`client-ui-conversation`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/ui-conversation), [`client-ui-primitives`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/ui-primitives), [`client-ui-slots`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/ui-slots), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`plan-mode`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/plan/plan-mode) |
| [`client-ui-subagent`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/ui-subagent) | `client` | [`client-locale`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/locale), [`client-runtime`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/runtime), [`client-ui-conversation`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/ui-conversation), [`client-ui-input-trigger`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/ui-input-trigger), [`client-ui-primitives`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/ui-primitives), [`client-ui-slots`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/ui-slots), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`subagent`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/subagent/subagent), [`token-meter`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/llm/token-meter) |
| [`client-ui-tool`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/ui-tool) | `client` | [`api-remotes`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/api/remotes), [`client-locale`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/locale), [`client-runtime`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/runtime), [`client-ui-conversation`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/ui-conversation), [`client-ui-primitives`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/ui-primitives), [`client-ui-slots`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/ui-slots), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants) |
| [`client-ui-workflow-run`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/ui-workflow-run) | `client` | [`client-locale`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/locale), [`client-runtime`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/runtime), [`client-ui-conversation`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/ui-conversation), [`client-ui-primitives`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/ui-primitives), [`client-ui-slots`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/ui-slots), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`session`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/core/session), [`tool-workflow`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/workflow/tool-workflow), [`workflow`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/workflow/workflow) |
| [`host-directory-picker-auto`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/host/directory-picker-auto) | `host` | [`client-ui-directory-picker-browse`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/ui-directory-picker-browse), [`client-ui-directory-picker-native`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/ui-directory-picker-native), [`host-directory-picker-browse`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/host/directory-picker-browse), [`host-directory-picker-native`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/host/directory-picker-native), [`host-webserver`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/host/webserver), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants) |
| [`session-log-export`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/session-query/session-log-export) | `session-query` | [`client-locale`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/locale), [`client-runtime`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/runtime), [`client-ui-commands`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/ui-commands), [`client-ui-conversation`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/ui-conversation), [`client-ui-primitives`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/ui-primitives), [`client-ui-slots`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/ui-slots), [`commands`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/interaction/commands), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants) |
| [`client-ui-model-selection`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/ui-model-selection) | `client` | [`api-remotes`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/api/remotes), [`client-connection`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/connection), [`client-locale`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/locale), [`client-runtime`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/runtime), [`client-ui-commands`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/ui-commands), [`client-ui-conversation`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/ui-conversation), [`client-ui-input-trigger`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/ui-input-trigger), [`client-ui-primitives`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/ui-primitives), [`client-ui-slots`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/ui-slots), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants) |
| [`client-ui-permission-presets`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/ui-permission-presets) | `client` | [`api-remotes`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/api/remotes), [`client-connection`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/connection), [`client-locale`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/locale), [`client-runtime`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/runtime), [`client-schema-form`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/schema-form), [`client-ui-commands`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/ui-commands), [`client-ui-input-trigger`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/ui-input-trigger), [`client-ui-primitives`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/ui-primitives), [`client-ui-settings`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/ui-settings), [`client-ui-slots`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/ui-slots), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants), [`permission-presets`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/interaction/permission-presets) |
| [`client-ui-skill`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/ui-skill) | `client` | [`api-remotes`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/api/remotes), [`client-connection`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/connection), [`client-locale`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/locale), [`client-runtime`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/runtime), [`client-ui-input-trigger`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/ui-input-trigger), [`client-ui-primitives`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/ui-primitives), [`client-ui-slots`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/ui-slots), [`client-ui-tool`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/ui-tool), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants) |
| [`client-ui-cordis`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/extensions/ui-cordis) | `extensions` | [`api-remotes`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/api/remotes), [`client-connection`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/connection), [`client-locale`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/locale), [`client-runtime`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/runtime), [`client-ui-input-trigger`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/ui-input-trigger), [`client-ui-primitives`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/ui-primitives), [`client-ui-sidebar`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/ui-sidebar), [`client-ui-slots`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/ui-slots), [`client-ui-tool`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/client/ui-tool), [`cordis-client-runner`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/extensions/cordis-client-runner), [`invariants`](https://github.com/deepseek-ai/deepseek-harness/tree/47f943859bef60e4160492346772ded9b24f765a/packages/runtime-diagnostics/invariants) |
