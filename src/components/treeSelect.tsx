import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { TreeView, useTreeItem } from '@mui/lab';
// eslint-disable-next-line import/named
import TreeItem, { TreeItemContentProps, TreeItemProps } from '@mui/lab/TreeItem';
import { Popover, TextField, Typography } from '@mui/material';
import clsx from 'clsx';
import React, { useState } from 'react';
import { DataType } from '@/constants/data';

const CustomContent = React.forwardRef(function CustomContent(props: TreeItemContentProps, ref) {
  const { classes, className, label, nodeId, icon: iconProp, expansionIcon, displayIcon } = props;

  const {
    disabled,
    expanded,
    selected,
    focused,
    handleExpansion,
    handleSelection,
    preventSelection,
  } = useTreeItem(nodeId);

  const icon = iconProp || expansionIcon || displayIcon;

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    preventSelection(event);
  };

  const handleExpansionClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    handleExpansion(event);
  };

  const handleSelectionClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    handleSelection(event);
  };

  return (
    <div
      className={clsx(className, classes.root, {
        [classes.expanded]: expanded,
        [classes.selected]: selected,
        [classes.focused]: focused,
        [classes.disabled]: disabled,
      })}
      onMouseDown={handleMouseDown}
      ref={ref as React.Ref<HTMLDivElement>}
      style={{ padding: '3px 0' }}
    >
      <div onClick={handleExpansionClick} className={classes.iconContainer}>
        {icon}
      </div>
      <Typography onClick={handleSelectionClick} component='div' className={classes.label}>
        {label}
      </Typography>
    </div>
  );
});

const CustomTreeItem = (props: JSX.IntrinsicAttributes & TreeItemProps) => (
  <TreeItem ContentComponent={CustomContent} {...props} />
);

type SelectTreeProps = {
  data: DataType[];
  initId: string;
  onChange: (id: string) => void;
};

export default function SelectTree(props: SelectTreeProps) {
  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);
  const [selectedItem, setSelectedItem] = useState('');
  const [selectedId, setSelectedId] = useState(props.initId);
  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const renderTree = (nodes: DataType) => (
    <CustomTreeItem key={nodes.id} nodeId={nodes.id} label={nodes.name}>
      {Array.isArray(nodes.children) ? nodes.children.map((node: any) => renderTree(node)) : null}
    </CustomTreeItem>
  );

  return (
    <>
      <TextField
        InputProps={{
          readOnly: true,
        }}
        required={false}
        name='selectedItem'
        id='selectedItem'
        defaultValue={selectedItem}
        value={selectedItem}
        onClick={(e) => handleClick(e)}
      />

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <TreeView
          aria-label='icon expansion'
          defaultSelected={selectedId}
          selected={selectedId}
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ChevronRightIcon />}
          onNodeSelect={(event: React.SyntheticEvent, nodeIds: string) => {
            setSelectedId(nodeIds);
            props.onChange(nodeIds);
            const element = event.target as HTMLElement;
            setSelectedItem(element.innerText);
            handleClose();
          }}
          sx={{
            height: 200,
            flexGrow: 1,
            minWidth: '200px',
            overflowY: 'auto',
          }}
        >
          {props.data.map((item) => renderTree(item))}
        </TreeView>
      </Popover>
    </>
  );
}
